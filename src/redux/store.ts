import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './slices/input'
import battlepassReducer from './slices/battlepass'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    battlepass: battlepassReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
