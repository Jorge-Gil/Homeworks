import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "./useForm";
import { registerAuth } from "./Thunks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { logout, register } from "./authSlice";
import { async } from "@firebase/util";

export const Registro = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "jorge.gil@uao.edu.co",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch(registerAuth(email, password));
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());

      dispatch(register({ email: user.email }));
    });
  }, []);

  return (
    <>
      <h1> Registro</h1>
      <hr />
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(event) => onInputChange(event)}
        />
        <button type="submit">Registro</button>
      </form>
    </>
  );
};
