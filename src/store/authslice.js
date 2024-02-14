import { createSlice } from "@reduxjs/toolkit";

const initState = { isLoggedIn: true };
const loginSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export default loginSlice.reducer;
export const { logIn, logOut } = loginSlice.actions;
