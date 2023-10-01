import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PrevPayment from '../components/PrevPayment';
//spinner when loading
const TransparentAccount = () => {
    let { accountNumber } = useParams();
    //
    useEffect(() => {
        console.log("useEffect TransparentAccount()")
        //Runs when component is being unmounted
        return () => {
            console.log("-unsetting transparent account in Redux here-")
        }
    }, [])
    //Loading Pwnspinner - TODO like in List
    //accept accountNumber - OK
    return (
        <>
            <div>
                <span>&lt;- back //(navigate -1)</span>
                <u>{accountNumber}</u>
            </div>
            {/*Transactions filtering*/}
            <div>
                {/*each soon navigate('TransparentAccount/:accountNumber/Payment/:accountNumber)*/}
                <PrevPayment />
                <PrevPayment />
                <PrevPayment />
            </div>
        </>
    )
}
export default TransparentAccount;