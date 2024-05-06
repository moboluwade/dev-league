import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      return {
        ...state, isLoggedIn: action
      }
    },
    LogoutUser: (state, action) => {
      return {
        ...state, isLoggedIn: action
      }
    }
  },
})

export const { LoginUser, LogoutUser } = userSlice.actions

export default userSlice.reducer
