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
        setAccount: (state, action: PayloadAction<IAccount>) => {
            state.account = action.payload
        },
        //TODO - use unsetAccountunsetAccount - useEffect call upon leaving
        unsetAccount: (state) => {
            state.account = null
        }
    }
})
export const { setAccounts } = bankSlice.actions
export default bankSlice.reducer