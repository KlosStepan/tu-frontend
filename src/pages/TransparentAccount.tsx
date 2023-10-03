import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Material UI
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
//Fetches
import FetchTransactions from '../fetches/FetchTransactions';
//Components
import Balance from '../components/Balance';
import PrevTransaction from '../components/PrevTransaction';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, unsetBalance, setAccountTransactions, unsetAccountTransactions } from '../redux-rtk/bankSlice';
//TypeScript
import IAccount from '../ts/IAccount';
import ITransaction from '../ts/ITransaction';
import { Pwnspinner } from 'pwnspinner';
import FetchBalance from '../fetches/FetchBalance';
import IBalance from '../ts/IBalance';

const TransparentAccount = () => {
    const dispatch = useDispatch();
    let { accountNumber } = useParams();
    //results
    //const [balance, setBalance] = useState<IBalance | null>(null);
    const balance: IBalance | null = useSelector((state: any) => state.bank.balance)
    const transactions: ITransaction[] | null = useSelector((state: any) => state.bank.transactions)
    useEffect(() => {
        const balance_promise = FetchBalance({ accountNumber: accountNumber })
        const transactions_promise = FetchTransactions({ accountNumber: accountNumber });
        Promise.all([balance_promise, transactions_promise]).then((result) => {
            //setBalance(result[0]);
            dispatch(setBalance(result[0]));
            dispatch(setAccountTransactions(result[1]));
        })
        //Runs when component is being unmounted
        return () => {
            console.log("-unsetting transparent account in Redux here-")
            //dispatch(unsetBalance());
            //dispatch(unsetAccountTransactions());
        }
    }, [accountNumber])
    //Loading Pwnspinner - TODO ala like in List
    return (
        <>
            <style type="text/css">
                {`
                    .boxed {
                        border: 1px solid black;
                        border-radius: 4px;
                        margin: 10px 0px 10px 0px;
                    }
                `}
            </style>
            <Typography variant="h1" gutterBottom>
                Transparent Account
            </Typography>
            <div>
                <span>&lt;- back //(navigate -1)</span>
                <u>{accountNumber}</u>
                <Balance />
            </div>
            {/*Transactions filtering*/}
            {/*Similar to ListingOfAccou..*/}
            {' '}
            <div>
                {(transactions !== null)
                    ? (transactions.length !== 0)
                        ? transactions.map((transaction: ITransaction) => <PrevTransaction transaction={transaction} />)
                        : <span className="boxed">-NO TRANSACTIONS-</span>
                    : <div> <Pwnspinner color="black" speed={0.7} thickness={2} /> </div>}
            </div>
        </>
    )
}
export default TransparentAccount;