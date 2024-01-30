import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoggedIn: (state) => {
      return {
        ...state,
        isLoggedIn: true,
      }
    },
  },
})

export const { LoggedIn } = counterSlice.actions

export default counterSlice.reducer