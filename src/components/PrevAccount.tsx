import React from "react";
//Router
import { useNavigate } from 'react-router-dom';
//TypeScript
import IAccount from "../ts/IAccount";

interface PrevAccountProps {
    account: IAccount;
}

const PrevAccount = ({ account }: PrevAccountProps) => {
    const navigate = useNavigate();
    const _parsed_accountNumber = account.identification.otherAccountNumber.split(' ')[1];
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
            <div className="boxed itemRow" onClick={() => navigate('/accounts/' + _parsed_accountNumber)}>
                <span>{account.id} | <b>{account.name}</b> in {account.currency}</span>
            </div>
        </>
    )
}
export default PrevAccount;