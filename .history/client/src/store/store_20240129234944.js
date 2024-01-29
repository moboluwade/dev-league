import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
