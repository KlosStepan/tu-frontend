import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewTransaction = () => {
    let { paymentNumber } = useParams();
    //
    useEffect(() => {
        console.log("useEffect ViewTransaction()")
    }, [])
    //accept paymentNumber
    return (
        <>
            <div>
                <span>&lt;- back //(navigate -1)</span>
                <u>{paymentNumber}</u>
            </div>
            <div>
                Od Frantiska
            </div>
            <div>
                500,- Kc
            </div>
        </>
    )
}
export default ViewTransaction;