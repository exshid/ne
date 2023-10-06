'use client'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
<header className="box-shadow-custom font-ysabeau text-[#1E1E1E]">
<nav className="bg-white w-full sticky">
            <div className="container py-6 mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">My Website</div>
                <div className={`lg:flex hidden space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
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
        </header>
    );
};

export default Navbar;
