import React, { useEffect, useState } from 'react';
import { getAllBlogs, approveBlog, addAdminComment } from '../utils/auth';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [adminComments, setAdminComments] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData);
      } catch (err) {
        setError(err.message || 'Failed to fetch blogs. Please try again.');
      }
    };

    fetchBlogs();
  }, []);

  const handleStatusChange = async (blogId, newStatus) => {
    try {
      const adminComment = adminComments[blogId] || '';
      await approveBlog(blogId, newStatus, adminComment);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, status: newStatus, adminComment } : blog
        )
      );
      setAdminComments((prevComments) => ({
        ...prevComments,
        [blogId]: '',
      }));
    } catch (err) {
      setError(err.message || 'Failed to update blog status. Please try again.');
    }
  };

  const handleAdminCommentChange = (blogId, comment) => {
    setAdminComments((prevComments) => ({
      ...prevComments,
      [blogId]: comment,
    }));
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Blogs</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Content</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Admin Comment</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td className="py-2 px-4 border-b">{blog.title}</td>
              <td className="py-2 px-4 border-b">{blog.content}</td>
              <td className="py-2 px-4 border-b">{blog.author.email}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={blog.status}
                  onChange={(e) => handleStatusChange(blog._id, e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={adminComments[blog._id] || ''}
                  onChange={(e) => handleAdminCommentChange(blog._id, e.target.value)}
                  placeholder="Add a comment"
                  className="border p-2 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;