import { createSlice } from "@reduxjs/toolkit";
import { auth, googleProvider } from "./firebase/config";


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
    logout: (state, action) => {
      auth.signOut();
      state.status = "logged out";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state, action) => {
      console.log("checking)");
    },
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { register, logout, checkingCredentials,  loginRequest, loginSuccess, loginFailure } = authSlice.actions;


export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess({ id: user.uid, email: user.email }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    dispatch(loginSuccess({ id: user.uid, email: user.email, displayName: user.displayName, photoUrl: user.photoURL }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};