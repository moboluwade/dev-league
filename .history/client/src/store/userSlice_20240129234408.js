import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoggedIn: (state) => {
      state.isLoggedIn = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { LoggedIn } = counterSlice.actions

export default counterSlice.reducer
