import React, { useEffect } from 'react';
//Redux/RTK
import { useSelector } from 'react-redux';
//Material UI
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
//TypeScript
import IAccount from '../ts/IAccount';
import { Pwnspinner } from 'pwnspinner';
//Components
import PrevAccount from '../components/PrevAccount';

const Accounts = () => {
    const accounts: IAccount[] | null = useSelector((state: any) => state.bank.accounts);

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
            {' '}
            <div>
                {(accounts !== null)
                    ? (accounts.length !== 0)
                        ? accounts.map((account: IAccount) => <PrevAccount account={account} />)
                        : <span className="boxed">-NO ACCOUNTS-</span>
                    : <div> <Pwnspinner color="black" speed={0.7} thickness={2} /> </div>}
            </div>
        </>
    )
}
export default Accounts;