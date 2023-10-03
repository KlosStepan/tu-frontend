import React from "react";
import { useNavigate } from 'react-router-dom';
//TypeScript
import ITransaction from "../ts/ITransaction";

interface PrevTransactionProps {
    transaction: ITransaction; // Define the prop with the ITransaction interface
}
//payment FROM, payment ammount, LINK View Payment
const PrevTransaction = ({ transaction }: PrevTransactionProps) => {

    const navigate = useNavigate();
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
            <div className="boxed itemRow" onClick={() => navigate('/accounts/' + 'accountNumberXX' + '/transactions/' + transaction.id)}>
                <span>transaction.id | etc.</span>
            </div>
        </>
    )
}

export default PrevTransaction;