import React, { useEffect } from 'react';
//Router
import { useParams, useNavigate } from 'react-router-dom';
//Redux/RTK
import { useSelector } from 'react-redux';
//Material UI
import { Card, CardContent, Typography, Grid } from '@mui/material';
//TypeScript
import ITransaction from '../ts/ITransaction';


const Transaction = () => {
    const navigate = useNavigate();
    let { transactionNumber } = useParams();

    //Transactions retrieval and Transaction(transactionNumber) slicing
    const transactions: ITransaction[] | null = useSelector((state: any) => state.bank.transactions)
    let transaction: ITransaction | undefined | null = null;
    if (transactions != null) {
        transaction = transactions.find(item => item.id === transactionNumber)
    }

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
                Transaction
            </Typography>
            <div>
                <span className="boxed itemRow" onClick={() => navigate(-1)}>&lt;- BACK</span>
            </div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Payment Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Amount: {transaction?.amount.value} {transaction?.amount.currency}
                            </Typography>
                            <Typography variant="body1">Booking Date: {transaction?.bookingDate}</Typography>
                            <Typography variant="body1">Transaction Type: {transaction?.transactionType}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">Bank Reference: {transaction?.bankref}</Typography>
                            <Typography variant="body1">
                                Counter Party Account: {transaction?.counterPartyAccount.accountName} - {transaction?.counterPartyAccount.accountNumber}
                            </Typography>
                            <Typography variant="body1">Own Account Number: {transaction?.ownAccountNumber}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">Details: {transaction?.details.detail1}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default Transaction;