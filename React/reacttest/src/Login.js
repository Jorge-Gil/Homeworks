import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithGoogle, logout } from './authSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const uid = useSelector((state) => state.auth.uid);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='mt-4'>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className='border border-gray-400 p-2 rounded-md'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className='border border-gray-400 p-2 rounded-md'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='border border-gray-600 rounded-md' type="submit" disabled={!!uid}>
          Log In
        </button>
      </form>

      <button
        className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4"
        onClick={handleGoogleLogin}
        disabled={!!uid}
      >
        Log In with Google
      </button>

     
        <button
          className="mt-4 bg-red-300 text-white rounded-md py-2 px-4"
          onClick={handleLogout}
        >
          Logout
        </button>
     
    </>
  );
};

