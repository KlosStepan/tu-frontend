import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardContent, Typography, Grid } from '@mui/material';


const ViewTransaction = () => {
    let { paymentNumber } = useParams();
    //retrieve transactions
    //get one by ID
    //[transaction]
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
                                Amount: {transaction.amount.value} {transaction.amount.currency}
                            </Typography>
                            <Typography variant="body1">Booking Date: {payment.bookingDate}</Typography>
                            <Typography variant="body1">Transaction Type: {transaction.transactionType}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">Bank Reference: {transaction.bankref}</Typography>
                            <Typography variant="body1">
                                Counter Party Account: {transaction.counterPartyAccount.accountName} - {transaction.counterPartyAccount.accountNumber}
                            </Typography>
                            <Typography variant="body1">Own Account Number: {transaction.ownAccountNumber}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">Details: {transaction.details.detail1}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default ViewTransaction;