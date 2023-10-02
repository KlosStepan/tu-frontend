import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//TypeScript
import IAccount from '../ts/IAccount'

export interface IBankState {
    accounts: IAccount[] | null
    account: IAccount | null
}
const initialState: IBankState = {
    accounts: null,
    account: null
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        setAccounts: (state, action: PayloadAction<IAccount[]>) => {
            state.accounts = action.payload
        },
        //TODO - use setAccount before React Router navigate
        setAccountTransactions: (state, action: PayloadAction<IAccount>) => {
            state.account = action.payload
        },
        //TODO - use unsetAccountunsetAccount - useEffect call upon leaving
        unsetAccountTransactions: (state) => {
            state.account = null
        }
    }
})
export const { setAccounts, setAccountTransactions, unsetAccountTransactions } = bankSlice.actions
export default bankSlice.reducer