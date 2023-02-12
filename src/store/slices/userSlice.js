import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  name: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      state.isAuth = true
      state.name = action.payload
    },
  },
})
export default userSlice.reducer
export const { signIn } = userSlice.actions
