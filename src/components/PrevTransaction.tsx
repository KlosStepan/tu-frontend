import React from "react";
//Router
import { useNavigate } from 'react-router-dom';
//TypeScript
import ITransaction from "../ts/ITransaction";

interface PrevTransactionProps {
    transaction: ITransaction;
}

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
            <div className="boxed itemRow" onClick={() => navigate('/accounts/' + '2002222222' + '/transactions/' + transaction.id)}>
                <span id={transaction.id}>{transaction.bookingDate} {' '}
                    | {transaction.counterPartyAccount.accountNumber} (<b>{transaction.counterPartyAccount.accountName}</b>){' '}
                    | {transaction.specificSymbol} {' '}
                    | {transaction.details.detail1}</span>
            </div>
        </>
    )
}
export default PrevTransaction;