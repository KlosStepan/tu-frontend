import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//TypeScript
import IVersionOfAPI from '../ts/IVersionOfAPI'

export interface IApiState {
    versionOfAPI: IVersionOfAPI | null
}
const initialState: IApiState = {
    versionOfAPI: null
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setVersionOfAPI: (state, action: PayloadAction<IVersionOfAPI>) => {
            state.versionOfAPI = action.payload
        }
    }
})
export const { setVersionOfAPI } = apiSlice.actions
export default apiSlice.reducer