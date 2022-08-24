import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './posts/postSlicer'

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch