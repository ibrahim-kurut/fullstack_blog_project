import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import LoginPage from './pages/LoginPage';




function App() {
  return (
    <>
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
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/login" element={<LoginPage color={color} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

