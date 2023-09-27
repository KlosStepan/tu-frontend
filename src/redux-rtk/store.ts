import { configureStore } from '@reduxjs/toolkit'
//slice - bankSlice
import bankSlice from './bankSlice'
//slice - apiSlice
import apiSlice from './apiSlice'

export const store = configureStore({
    reducer: {
        api: apiSlice,
        bank: bankSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch