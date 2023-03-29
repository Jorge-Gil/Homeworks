import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displauName: null,
    photoUrl: null,
    errorMessage: null,
  },

  reducers: {
    register: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state, action) => {},
    checkingCredentials: (state, action) => {
      console.log("checking)");
    },
  },
});

export const { login,register, logout, checkingCredentials } = authSlice.actions;