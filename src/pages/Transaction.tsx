import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardContent, Typography, Grid } from '@mui/material';
import ITransaction from '../ts/ITransaction';
import { useSelector } from 'react-redux';


const ViewTransaction = () => {
    let { transactionNumber } = useParams();
    //retrieve transactions
    //get one by ID
    //[transaction]
    const transactions: ITransaction[] | null = useSelector((state: any) => state.bank.transactions)
    //const transaction: ITransaction | null = transactions.find(item => item.id === transactionNumber) ?? null
    const transaction: ITransaction | null = {
        "amount": {
            "currency": "CZK",
            "value": 1500
        },
        "bankref": "PS221019SO314822",
        "bookingDate": "2022-10-19",
        "counterPartyAccount": {
            "accountName": "PPF BANKA A.S.",
            "accountNumber": "0000009504010019",
            "bankCode": "6000"
        },
        "creditDebitIndicator": "CRDT",
        "details": {
            "detail1": "Posílám peníze"
        },
        "id": "20221019:0000000219",
        "ownAccountNumber": "2002222222",
        "postingDate": "2022-10-19",
        "productBankRef": "PS221019SO314822",
        "specificSymbol": "12",
        "statementNumber": "196",
        "statementPeriod": "2022",
        "transactionId": "4831716",
        "transactionType": "DPO",
        "transactionTypeCode": 1012209,
        "variableSymbol": "12"
    };
    console.log(transactions)
    useEffect(() => {
        console.log("useEffect ViewTransaction()")
    }, [])
    //accept paymentNumber
    return (
        <>
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
export default ViewTransaction;