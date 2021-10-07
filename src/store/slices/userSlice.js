import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: false,
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    signInUser(state, action) {
      state.signedIn = true;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    signOutUser(state, action) {
      state.signedIn = false;
      state.email = "";
      state.id = "";
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
