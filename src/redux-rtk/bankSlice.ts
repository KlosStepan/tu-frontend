import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//TypeScript
import IAccount from '../ts/IAccount'

export interface IBankState {
    accounts: IAccount[]
}
const initialState: IBankState = {
    accounts: []
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        setAccounts: (state, action: PayloadAction<IAccount[]>) => {
            state.accounts = action.payload
        }
        //TODO others further the inspeciton of payments
    }
})
export const { setAccounts } = bankSlice.actions
export default bankSlice.reducer