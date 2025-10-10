import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-sans">
            {/* Top Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center text-sm text-gray-700">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">EKSPRESS@MAIL.COM</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm font-medium">+1 (333) 000-0000</span>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow transition uppercase text-sm">
                        GET QUOTE
                    </button>
                </div>
            </div>

            <div className="bg-blue-900 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        <div className="flex-shrink-0">
                            <span className="text-3xl font-extrabold text-white tracking-wider">EKSPRESS</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex sm:space-x-8">
                            <a href="#home" className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium uppercase">Home</a>
                            <a href="#about" className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium uppercase">About Us</a>
                            <a href="#services" className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium uppercase">Services</a>
                            <a href="#contact" className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium uppercase">Contact Us</a>
                            <a href="#blog" className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium uppercase">Blog</a>
                        </div>
                        <div className="sm:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" >
                                {isOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="sm:hidden bg-blue-800">
                        <a href="#home" className="block px-4 py-2 text-white hover:bg-blue-700">Home</a>
                        <a href="#about" className="block px-4 py-2 text-white hover:bg-blue-700">About Us</a>
                        <a href="#services" className="block px-4 py-2 text-white hover:bg-blue-700">Services</a>
                        <a href="#contact" className="block px-4 py-2 text-white hover:bg-blue-700">Contact Us</a>
                        <a href="#blog" className="block px-4 py-2 text-white hover:bg-blue-700">Blog</a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
