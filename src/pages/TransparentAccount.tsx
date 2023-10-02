import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import PrevTransaction from '../components/PrevTransaction';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
import { setAccountTransactions, unsetAccountTransactions } from '../redux-rtk/bankSlice';
//TypeScript
import IAccount from '../ts/IAccount';

const TransparentAccount = () => {
    const dispatch = useDispatch();
    let { accountNumber } = useParams();
    const accounts: IAccount[] | null = useSelector((state: any) => state.bank.accounts)

    //TODO determine - accountNumber: number | string
    const sliceAccountTransactions = async (accountNumber: number | string) => {
        console.log("sliceAccountTransactions()")
        //retrieve stuff&slice
        //dispatch(setAccountTransactions())
    }
    useEffect(() => {
        console.log("useEffect TransparentAccount()")
        if (accountNumber && accountNumber !== "") sliceAccountTransactions(accountNumber);
        //Slice AccountTransactions from big one
        //Runs when component is being unmounted
        return () => {
            console.log("-unsetting transparent account in Redux here-")
            dispatch(unsetAccountTransactions())
        }
    }, [accounts, accountNumber])
    //Loading Pwnspinner - TODO ala like in List
    return (
        <>
            <div>
                <span>&lt;- back //(navigate -1)</span>
                <u>{accountNumber}</u>
            </div>
            {/*Transactions filtering*/}
            {/*Similar to ListingOfTransp..*/}
            <div>
                {/*each soon navigate('TransparentAccount/:accountNumber/Payment/:accountNumber)*/}
                {/*<PrevTransaction />
                <PrevTransaction />
                <PrevTransaction />*/}
            </div>
        </>
    )
}
export default TransparentAccount;