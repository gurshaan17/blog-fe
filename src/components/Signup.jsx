import React from 'react';
import { signup } from '../utils/auth';
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL; 
function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      await signup(email, password);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-36 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 flex justify-center pb-4">Sign Up</h2>
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
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" type="submit">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Existing user? Login
          </Link>
        </div>
        <div className='pt-5'>
            (You have to go to login page after registering a new user)
          </div>
      </div>
    </div>
  );
}

export default Signup;