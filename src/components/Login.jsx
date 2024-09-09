import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/auth';

function Login({ setUser }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const userData = await login(email, password);
      if (typeof setUser === 'function') {
        setUser(userData);
      }
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/google';
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-36 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 flex justify-center pb-4">Log In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded w-full mb-4"
          onClick={handleGoogleLogin}
        >
          Log in with Google
        </button>
        <div className="text-center mb-4">or</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input className="border w-full p-2 rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password</label>
            <input className="border w-full p-2 rounded" type="password" id="password" name="password" required />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" type="submit">Log In</button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            New user? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;