import React from "react";
//TypeScript
import IBalance from "../ts/IBalance";

interface BalanceProps {
    balance: IBalance | null; // Define the prop with the IAccount interface
}

//Component to be embedded w/ props drilling
const Balance = ({ balance }: BalanceProps) => {
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
            <div>&nbsp;</div>
            <span className="boxed">
                <span>Balance <b>{balance?.amount.currency} {balance?.amount.value}</b></span>
            </span>
        </>
    )
}
export default Balance;