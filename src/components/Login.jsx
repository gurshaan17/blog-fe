import React from 'react';

function Login({ setUser }) {
  const handleGoogleLogin = async () => {
    const response = await fetch('https://blog-be-mqm1.onrender.com/auth/google', {
      method: 'GET',
      credentials: 'include'
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData); 
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleGoogleLogin}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;