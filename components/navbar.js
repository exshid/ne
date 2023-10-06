'use client'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
<header className="sticky top-0 font-ysabeau z-[555] text-[#1E1E1E]">
<nav className="box-shadow-custom bg-white w-full">
            <div className="container p-6 mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">My Website</div>
                <div className={`lg:flex hidden space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <div className="lg:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] lg:h-[25px] lg:w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default Navbar;
