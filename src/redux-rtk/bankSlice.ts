import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//TypeScript
import IBalance from '../ts/IBalance'
import IAccount from '../ts/IAccount'
import ITransaction from '../ts/ITransaction'

export interface IBankState {
    // 1/3
    accounts: IAccount[] | null
    // 2/3
    balance: IBalance | null
    transactions: ITransaction[] | null
    // 3/3
    transaction: ITransaction | null
}
const initialState: IBankState = {
    accounts: null,
    balance: null,
    transactions: null,
    transaction: null
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        // 1/3 ListingOfAccount.tsx: Initial Accounts page
        setAccounts: (state, action: PayloadAction<IAccount[]>) => {
            state.accounts = action.payload
        },

        // 2/3 TransparentAccount.tsx: Account page, balance & transactions listing 
        setBalance: (state, action: PayloadAction<IBalance>) => {
            state.balance = action.payload
        },
        unsetBalance: (state) => {
            state.balance = null
        },
        setAccountTransactions: (state, action: PayloadAction<ITransaction[]>) => {
            state.transactions = action.payload
        },
        unsetAccountTransactions: (state) => {
            state.transactions = null
        },

        // 3/3 Transaction.tsx: Transaction page
        /*setTransaction: (state, action: PayloadAction<ITransaction>) => {
            state.transaction = action.payload
        },
        unsetTransaction: (state) => {
            state.transaction = null
        }*/
    }
})
export const {
    setAccounts,
    setBalance,
    unsetBalance,
    setAccountTransactions,
    unsetAccountTransactions /*,
    setTransaction,
    unsetTransaction*/ } = bankSlice.actions
export default bankSlice.reducer