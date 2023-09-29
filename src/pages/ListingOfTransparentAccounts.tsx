import React, { useEffect } from 'react';
import PrevAccount from '../components/PrevAccount';

const ListingOfTransparentAccounts = () => {
    //
    useEffect(() => {
        console.log("useEffect ListingOfTransparentAccounts()")
    }, [])
    //retrieve listing of accounts
    return (
        <>
            <div>|<u>Search bar</u>|</div>
            {/*<div>&nbsp;</div>*/}
            <div>Accounts</div>
            <div>
                {/*each soon navigate('TransparentAccount/:accountNumber)*/}
                <PrevAccount />
                <PrevAccount />
                <PrevAccount />
            </div>
        </>
    )
}
export default ListingOfTransparentAccounts;