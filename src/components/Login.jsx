import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/auth';
const API_URL = import.meta.env.VITE_API_URL; 

function Login({ setUser }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (event, email, password) => {
    event.preventDefault();
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
    window.location.href = `${API_URL}/auth/google`;
  };

  const handleAdminLogin = (event) => {
    handleSubmit(event, 'admin@gmail.com', 'admin');
  };

  const handleUserLogin = (event) => {
    handleSubmit(event, 'test123@gmail.com', 'test');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-36 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 flex justify-center pb-4">Log In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="text-center mb-4">or</div>
        <form onSubmit={(e) => handleSubmit(e, e.target.email.value, e.target.password.value)}>
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
        <div className="mt-4 text-center">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded w-full mb-2"
            onClick={handleAdminLogin}
          >
            Login as Admin
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded w-full"
            onClick={handleUserLogin}
          >
            Login as User
          </button>
          <div className='pt-5'>
            (You can always login after creating a new user)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;