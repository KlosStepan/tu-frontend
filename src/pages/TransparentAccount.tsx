import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Material UI
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
//Fetches
import FetchTransactions from '../fetches/FetchTransactions';
//Components
import PrevTransaction from '../components/PrevTransaction';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
import { setAccountTransactions, unsetAccountTransactions } from '../redux-rtk/bankSlice';
//TypeScript
import IAccount from '../ts/IAccount';
import ITransaction from '../ts/ITransaction';
import { Pwnspinner } from 'pwnspinner';

const TransparentAccount = () => {
    const dispatch = useDispatch();
    let { accountNumber } = useParams();
    //const accounts: IAccount[] | null = useSelector((state: any) => state.bank.accounts)
    const transactions: ITransaction[] | null = useSelector((state: any) => state.bank.transactions)
    useEffect(() => {
        const transactions_promise = FetchTransactions({ accountNumber: accountNumber });
        Promise.resolve(transactions_promise).then((result) => {
            dispatch(setAccountTransactions(result));
        })
        //Runs when component is being unmounted
        return () => {
            console.log("-unsetting transparent account in Redux here-")
            dispatch(unsetAccountTransactions())
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
                Accounts
            </Typography>
            <div>
                <span>&lt;- back //(navigate -1)</span>
                <u>{accountNumber}</u>
            </div>
            {/*Transactions filtering*/}
            {/*Similar to ListingOfTransp..*/}
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