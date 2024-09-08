import React, { useState } from 'react';

function BlogCreate({ user, setBlogs }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateBlog = async () => {
    const response = await fetch('https://blog-be-mqm1.onrender.com/blog/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ title, content, userId: user._id }),
    });

    if (response.ok) {
      const newBlog = await response.json();
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Create Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border p-2 mb-2 w-full"
      ></textarea>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleCreateBlog}
      >
        Submit Blog for Approval
      </button>
    </div>
  );
}

export default BlogCreate;