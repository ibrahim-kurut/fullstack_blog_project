import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostsPage';
import PostDetail from './pages/PostDetail';

import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


function App() {
  return (
    <>
      <ToastContainer theme="colored" />
      <Main />
    </>
  );
}

function Main() {
  const [color, setColor] = useState('bg-gray-800');

  const toggleColor = () => {
    setColor(color === 'bg-gray-800' ? 'bg-gray-300' : 'bg-gray-800');
  };

  return (
    <div className={`${color} min-h-screen transition-colors duration-300`}>
      <Navbar toggleColor={toggleColor} color={color} />
      <main className={`${color === 'bg-gray-800' && "text-white"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/login" element={<LoginPage color={color} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

