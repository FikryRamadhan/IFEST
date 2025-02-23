import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen overflow-auto bg-black flex flex-col items-center justify-center p-4 text-white">
            <div className="text-center relative w-full max-w-2xl mx-4">
                {/* Efek Glow - Responsive */}
                <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-white/10 to-gray-600/10 blur-xl md:blur-3xl rounded-full animate-pulse"></div>

                {/* Angka 404 - Responsive Text Size */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Pesan Error - Responsive Text Size */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                    <span className="text-red-500">Oops!</span> Page Not Found
                </h2>

                {/* Deskripsi - Responsive Width & Spacing */}
                <p className="text-gray-400 text-sm md:text-base max-w-xs md:max-w-md mx-auto mb-6 md:mb-8 px-2">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>

                {/* Tombol Kembali - Responsive Padding */}
                <Link 
                    to="/"
                    className="inline-block bg-white text-black px-4 py-2 md:px-6 md:py-3 
                    rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium
                    text-sm md:text-base shadow-lg hover:shadow-xl"
                >
                    Return Home
                </Link>

                {/* Efek Dekoratif - Responsive Size */}
                <div className="mt-6 md:mt-8 opacity-50">
                    <div className="inline-block animate-spin text-3xl md:text-4xl">🌑</div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;