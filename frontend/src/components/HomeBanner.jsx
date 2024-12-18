import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="relative h-[50vh] md:h-[70vh] flex items-center justify-center bg-black">
            {/* Background Image */}
            <img
                src="../../assets/img/banner.jpg"
                alt="A vibrant blog background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="overlay absolute inset-0 bg-black opacity-70"></div>

            {/* Banner Text */}
            <div className="relative text-center px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Discover Inspiring Stories
                </h2>
                <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto">
                    Join our blog to get the latest articles and tips that inspire you in various fields.
                </p>
                <Link
                    to="/login"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition">
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default HomeBanner;
