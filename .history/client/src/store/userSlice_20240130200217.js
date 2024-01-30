import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Login: false,
}

export const userrSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoggedIn: (state) => {
      return {
        ...state,
        Login: true,
      }
    },
  },
})

export const { LoggedIn } = userrSlice.actions

export default userrSlice.reducer
