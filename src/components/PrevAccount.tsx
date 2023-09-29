import React from "react";

//account name, account holder + LINK
const PrevAccount = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .boxed {
                        border: 1px solid black;
                        margin: 2px;
                    }
                `}
            </style>
            <div className="boxed">
                <span>Name of institution | currency | etc.</span>
            </div>
        </>
    )
}

export default PrevAccount;