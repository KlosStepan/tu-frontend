interface IBalance {
    amount: {
        currency: string;
        value: number;
    };
    date: string;
    type: string;
}