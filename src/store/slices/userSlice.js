import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  id: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      state.isAuth = true
      state.id = action.payload
    },
  },
})
export default userSlice.reducer
export const { signIn } = userSlice.actions
