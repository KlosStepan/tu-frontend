import React from "react";

//account name, account holder + LINK
const PrevAccount = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .boxed {
                        border: 1px solid black;
                        border-radius: 4px;
                        margin: 10px 0px 10px 0px;
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