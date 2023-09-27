interface IAccount {
    currency: string;
    id: string;
    identification: {
        iban: string;
        otherAccountNumber: string;
    };
    name: string;
    product: string;
    servicer: {
        bankCode: string;
        bic: string;
        countryCode: string;
    };
}