import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UserLogin: (state) => {
      return {
        ...state,
        isLoggedIn: true,
      }
    },
    UserLogout: (state) => {
      return {
        ...state,
        isLoggedIn: false
      }
    }
  },
})

export const { UserLogin, UserLogout } = userSlice.actions

export default userSlice.reducer
