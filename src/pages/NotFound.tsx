import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-white">
                {/* Konten Utama */}
                <div className="text-center relative">
                    {/* Efek Glow */}
                    <div className="absolute -inset-12 bg-gradient-to-r from-white/10 to-gray-600/10 blur-3xl rounded-full animate-pulse"></div>

                    {/* Angka 404 */}
                    <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
                        404
                    </h1>

                    {/* Pesan Error */}
                    <h2 className="text-3xl font-semibold mb-4">
                        <span className="text-red-500">Oops!</span> Page Not Found
                    </h2>

                    {/* Deskripsi */}
                    <p className="text-gray-400 max-w-md mb-8">
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>

                    {/* Tombol Kembali */}
                    <Link
                        to="/"
                        className="inline-block bg-white text-black px-6 py-3 rounded-lg 
          hover:bg-gray-200 transition-all duration-300 font-medium
          shadow-lg hover:shadow-xl"
                    >
                        Return Home
                    </Link>

                    {/* Efek Dekoratif */}
                    <div className="mt-8 opacity-50">
                        <div className="inline-block animate-spin text-4xl">🌑</div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NotFound