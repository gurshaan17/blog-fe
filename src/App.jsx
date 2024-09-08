import React, { useState } from 'react';
import Login from './components/Login';
import BlogCreate from './components/BlogCreate';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null); // Store logged-in user details
  const [blogs, setBlogs] = useState([]); // Store blogs for the dashboard

  return (
    
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl text-center font-bold mb-5">Blog App</h1>
      
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <BlogCreate user={user} setBlogs={setBlogs} />
          <Dashboard user={user} blogs={blogs} />
        </div>
      )}
    </div>
  );
}

export default App;