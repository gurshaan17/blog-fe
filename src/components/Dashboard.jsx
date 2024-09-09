import React, { useEffect, useState } from 'react';

function Dashboard({ user, blogs }) {
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`http://localhost:4000/user/dashboard/${user._id}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const blogs = await response.json();
        setUserBlogs(blogs);
      }
    };
    fetchBlogs();
  }, [user._id]);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Your Blogs</h2>
      {userBlogs.length === 0 && <p>No blogs available</p>}
      {userBlogs.map((blog) => (
        <div key={blog._id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <p>{blog.content}</p>
          <p className={`font-bold ${blog.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
            Status: {blog.status}
          </p>
          {blog.comments && <p>Admin Comments: {blog.comments}</p>}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;