'use client'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-lg font-bold">My Website</div>
                <div className={`lg:flex hidden space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
                <div className="lg:hidden block">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        III
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
