import React, { useEffect, useState } from 'react';
import { getUserBlogs } from '../utils/auth';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getUserBlogs();
        setBlogs(blogsData);
      } catch (err) {
        setError(err.message || 'Failed to fetch blogs. Please try again.');
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Blogs</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-700 mb-4">{blog.content}</p>
            <p className="text-gray-500 text-sm">Status: {blog.status}</p>
            <p className="text-gray-500 text-sm">Admin Comment: {blog.adminComment}</p>
            <p className="text-gray-500 text-sm">Created At: {new Date(blog.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;