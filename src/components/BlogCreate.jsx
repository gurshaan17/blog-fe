import React, { useState } from 'react';
import { createBlog, isLoggedIn } from '../utils/auth';

function BlogCreate({ setBlogs }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleCreateBlog = async () => {
    if (!isLoggedIn()) {
      setError('User not authenticated. Please log in.');
      return;
    }

    try {
      await createBlog(title, content);
      setTitle('');
      setContent('');
      setError('');
      setSubmissionStatus('Your blog has been submitted for approval.');
    } catch (err) {
      console.error('Error creating blog:', err);
      setError(err.message || 'Failed to create blog. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto mt-10">
  <h2 className="text-2xl font-semibold mb-4 text-center">Create a New Blog</h2>
  
  {error && <p className="text-red-600 text-center mb-4">{error}</p>}
  {submissionStatus && <p className="text-green-600 text-center mb-4">{submissionStatus}</p>}
  
  {/* Blog Title Input */}
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Blog Title"
    className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
  />
  
  {/* Blog Content Input */}
  <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}
    placeholder="Blog Content"
    className="border border-gray-300 p-3 mb-4 w-full rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-green-400"
  ></textarea>
  
  {/* Submit Button */}
  <button
    className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-green-600 transition duration-300"
    onClick={handleCreateBlog}
  >
    Submit Blog for Approval
  </button>
</div>
  );
}

export default BlogCreate;