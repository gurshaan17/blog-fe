import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Avatar = () => (
    <div className='text-lg'>
        <CgProfile />
    </div>
);

const Input = ({ type, placeholder, className }) => (
  <input type={type} placeholder={placeholder} className={`border rounded px-2 py-1 ${className}`} />
);

const Card = ({ children }) => <div className="border rounded-lg overflow-hidden">{children}</div>;

const Component = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to Our Blog</h1>
              <p className="text-gray-600 md:text-xl">
                Explore a wide range of topics and insights from our talented writers.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Link to='/all' className='text-3xl font-semibold text-decoration: underline'>
                    Read our stories... 
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mastering React: A Comprehensive Guide",
                author: "John Doe",
                date: "April 15, 2023",
                content: "In this comprehensive guide, we'll dive deep into the world of React, exploring its core concepts, best practices, and advanced techniques to help you become a proficient React developer.",
              },
              {
                title: "Unleashing the Power of CSS Grid",
                author: "Jane Smith",
                date: "April 10, 2023",
                content: "Discover the power of CSS Grid and learn how to create complex, responsive layouts with ease. This article covers the fundamentals, advanced techniques, and real-world examples to help you master this powerful CSS feature.",
              },
              {
                title: "Optimizing Website Performance: A Practical Guide",
                author: "Emily Johnson",
                date: "April 5, 2023",
                content: "In this comprehensive guide, we'll explore various techniques and strategies to optimize your website's performance, from image optimization to code minification and beyond. Improve your site's speed and provide a seamless user experience.",
              },
            ].map((post, index) => (
              <Card key={index}>
                <div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Avatar src="/placeholder-user.jpg" alt="Avatar" fallback="AC" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h3 className="text-lg font-medium">{post.title}</h3>
                  <p className="line-clamp-3 text-gray-600">{post.content}</p>
                </div>
                <div className="p-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
          <nav className="flex gap-4 text-sm font-medium">
            <Link href="#" className="hover:underline hover:underline-offset-4">
              About
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-4">
              Terms
            </Link>
          </nav>
          <p className="text-sm text-gray-600">&copy; 2024 Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ArrowRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const BookIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export default Component;