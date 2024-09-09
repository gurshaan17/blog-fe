import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignUp';
import BlogCreate from './pages/BlogCreate';
import AdminApprove from './pages/AdminApprove';
import PublicBlogs from './pages/PublicBlogs';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/create' element={<BlogCreate/>}/>
          <Route path='/approve' element={<AdminApprove/>}/>
          <Route path='/all' element={<PublicBlogs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;