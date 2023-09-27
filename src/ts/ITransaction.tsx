interface ITransaction {
    amount: {
        currency: string;
        value: number;
    };
    bankref: string;
    bookingDate: string;
    counterPartyAccount: {
        accountName: string;
        accountNumber: string;
        bankCode: string;
    };
    creditDebitIndicator: string;
    details: {
        detail1: string;
    };
    id: string;
    ownAccountNumber: string;
    postingDate: string;
    productBankRef: string;
    specificSymbol: string;
    statementNumber: string;
    statementPeriod: string;
    transactionId: string;
    transactionType: string;
    transactionTypeCode: number;
    variableSymbol: string;
}
export default ITransaction;