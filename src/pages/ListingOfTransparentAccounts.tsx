import React, { useEffect } from 'react';
//Material UI
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
//Components
import PrevAccount from '../components/PrevAccount';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
//TypeScript
import IAccount from '../ts/IAccount';
import { Pwnspinner } from 'pwnspinner';

const ListingOfTransparentAccounts = () => {
    //Redux retrieval
    const accounts: IAccount[] | null = useSelector((state: any) => state.bank.accounts)
    useEffect(() => {
        console.log("useEffect ListingOfTransparentAccounts()")
    }, [])

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
                <TextField id="outlined-search" label="Search field" type="search" />
            </div>
            {/*<div>&nbsp;</div>*/}
            <div>
                {/*each soon navigate('TransparentAccount/:accountNumber)*/}
                {(accounts !== null)
                    ? (accounts.length !== 0)
                        ? accounts.map((account: IAccount) => <PrevAccount account={account} />)
                        : <span className="boxed">-NO ACCOUNTS-</span>
                    : <div> <Pwnspinner color="black" speed={0.7} thickness={2} /> </div>}
            </div>
        </>
    )
}
export default ListingOfTransparentAccounts;