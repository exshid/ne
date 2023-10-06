'use client'
import Link from 'next/link';

import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
  
    return (
<header className="sticky top-0 font-ysabeau z-[555] text-[#1E1E1E]">
<nav className="box-shadow-custom bg-white/70 backdrop-blur-xl w-full">
            <div className="container p-6 mx-auto flex items-center justify-between">
            <Link href="/">
              <div className="text-lg font-bold">Our agency</div>
              </Link>
                <div className={`lg:flex hidden space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <Link href="/about">About Us</Link>
                    <Link href="/submissions">Submissions</Link>
                    <Link href="#contact">Contact Us</Link>
                </div>
                <div className="lg:hidden block">
                <svg onClick={showDrawer} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-[30px] h-[30px] lg:h-[25px] lg:w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                </div>
            </div>
            
  <Drawer
           placement={placement}
           closable={true}
           onClose={onClose}
           open={open}
           key={placement}
           className="text-black w-3/4 font-ysabeau"
         >
            <div className="flex flex-col text-xl">
              <Link onClick={onClose} href="/">Home</Link>

                    <Link onClick={onClose} href="/about">About Us</Link>
                    <Link onClick={onClose} href="/submissions">Submissions</Link>
                    <Link onClick={onClose} href="#contact">Contact Us</Link>

                    </div>
         </Drawer>

        </nav>
        </header>
    );
};

export default Navbar;
