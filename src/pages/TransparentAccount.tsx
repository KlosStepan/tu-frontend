import React, { useEffect } from 'react';
import { Pwnspinner } from 'pwnspinner';
//Router
import { useParams, useNavigate } from 'react-router-dom';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, setAccountTransactions } from '../redux-rtk/bankSlice';
//Material UI
import { Typography } from '@mui/material';
//Fetches
import FetchTransactions from '../fetches/FetchTransactions';
import FetchBalance from '../fetches/FetchBalance';
//TypeScript
import IBalance from '../ts/IBalance';
import ITransaction from '../ts/ITransaction';
//Components
import Balance from '../components/Balance';
import PrevTransaction from '../components/PrevTransaction';

const TransparentAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { accountNumber } = useParams();

    const balance: IBalance | null = useSelector((state: any) => state.bank.balance)
    const transactions: ITransaction[] | null = useSelector((state: any) => state.bank.transactions)

    useEffect(() => {
        const balance_promise = FetchBalance({ accountNumber: accountNumber })
        const transactions_promise = FetchTransactions({ accountNumber: accountNumber });
        Promise.all([balance_promise, transactions_promise]).then((result) => {
            dispatch(setBalance(result[0]));
            dispatch(setAccountTransactions(result[1]));
        })
    }, [accountNumber]) //<- Check for  accountNumber change when Component is mounted

    return (
        <>
            <style type="text/css">
                {`
                    .boxed {
                        border: 1px solid black;
                        border-radius: 4px;
                        margin: 10px 0px 10px 0px;
                    }
                    .itemRow:hover {
                        cursor: pointer;
                    }
                `}
            </style>
            <Typography variant="h1" gutterBottom>
                Transparent Account
            </Typography>

            <div>
                <span className="boxed itemRow" onClick={() => navigate(-1)}>&lt;- BACK</span>
                <span>&nbsp;</span>
                <div>
                    Account n# <b>{accountNumber}</b>
                </div>
                {(balance !== null)
                    ? < Balance balance={balance} />
                    : <div> <Pwnspinner color="black" speed={0.7} thickness={2} /> </div>}
            </div>
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