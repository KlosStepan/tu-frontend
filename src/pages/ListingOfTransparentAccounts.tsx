import React, { useEffect } from 'react';
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
            <div>|<u>Search bar</u>|</div>
            {/*<div>&nbsp;</div>*/}
            <div>Accounts</div>
            <div>
                {/*each soon navigate('TransparentAccount/:accountNumber)*/}
                {(accounts !== null)
                    ? (accounts.length !== 0)
                        ? accounts.map((account: IAccount) => <PrevAccount />)
                        : <span>-NO ACCOUNTS-</span>
                    : <div> <Pwnspinner color="black" speed={0.7} thickness={2} /> </div>}
            </div>
        </>
    )
}
export default ListingOfTransparentAccounts;