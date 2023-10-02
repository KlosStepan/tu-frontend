import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//TypeScript
import IAccount from '../ts/IAccount'
import ITransaction from '../ts/ITransaction'

export interface IBankState {
    accounts: IAccount[] | null
    transactions: ITransaction[] | null
}
const initialState: IBankState = {
    accounts: null,
    transactions: null
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        setAccounts: (state, action: PayloadAction<IAccount[]>) => {
            state.accounts = action.payload
        },
        //TODO - use setAccount before React Router navigate
        setAccountTransactions: (state, action: PayloadAction<ITransaction[]>) => {
            state.transactions = action.payload
        },
        //TODO - use unsetAccountunsetAccount - useEffect call upon leaving
        unsetAccountTransactions: (state) => {
            state.transactions = null
        }
    }
})
export const { setAccounts, setAccountTransactions, unsetAccountTransactions } = bankSlice.actions
export default bankSlice.reducer