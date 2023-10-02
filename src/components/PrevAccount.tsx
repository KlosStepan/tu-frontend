import React from "react";
import { useNavigate } from 'react-router-dom';
//TypeScript
import IAccount from "../ts/IAccount";

interface PrevAccountProps {
    account: IAccount; // Define the prop with the IAccount interface
}

//account name, account holder + LINK
const PrevAccount = ({ account }: PrevAccountProps) => {
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
            <div className="boxed itemRow" onClick={() => navigate('/accounts/' + account.id)}>
                <span>{account.id} | <b>{account.name}</b> in {account.currency}</span>
            </div>
        </>
    )
}

export default PrevAccount;