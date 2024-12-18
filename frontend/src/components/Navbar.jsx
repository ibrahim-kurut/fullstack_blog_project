import React from 'react';
import { Link } from 'react-router-dom';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";


const Navbar = ({ toggleColor, color }) => {
    return (
        <nav className="p-4 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-xl font-bold">blog</div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-blue-500">home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-500">about</Link>
                    <Link to="/blog" className="text-gray-800 hover:text-blue-500">blogs</Link>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <Link to="/login" className="text-gray-800 hover:text-blue-500">login</Link>
                    </div>
                    <div
                        onClick={toggleColor}
                        className="text-gray-800"
                    >
                        {color === 'bg-gray-800' ? (
                            <MdSunny size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;