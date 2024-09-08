import React from 'react';
import { signup } from '../utils/auth';

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

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input className="border w-full p-2 rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password</label>
            <input className="border w-full p-2 rounded" type="password" id="password" name="password" required />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;