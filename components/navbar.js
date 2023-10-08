'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const headerRef = useRef(null); // No type annotation needed for vanilla JS
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const handleTab = (event) => {
      if (event.key === 'Tab' && contactSectionRef.current) {
        // If the tab key is pressed, focus the first element inside the contact section
        contactSectionRef.current.focus();
        event.preventDefault();
      }
    };

    // Add event listener for the 'Tab' key
    document.addEventListener('keydown', handleTab);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleTab);
    };
  }, []);


  useEffect(() => {
    // sync scroll position with state
    setScrollTop(document.documentElement.scrollTop);

    // update state on scroll
    const handleScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);



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
<header className="sticky top-0 font-ysabeau z-[555] text-white">
<nav ref={headerRef} role="navigation" className={`${headerRef.current && scrollTop > headerRef.current.clientHeight ? 'box-shadow-custom bg-darkish/80 backdrop-blur-xl w-full' : 'bg-darkish w-full'}`}>

<div className="container p-6 mx-auto flex items-center justify-between">
            <Link role="link" href="/">
              <h1 className="text-lg font-bold">Our agency</h1>
              </Link>
                <div className={`lg:flex hidden space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                <Link href="/about" role="link">About Us</Link>
      <Link href="/submissions" role="link">Submissions</Link>
      <Link href="#contact" role="link">Contact Us</Link>
                </div>
                <div className="lg:hidden block">
      <button onClick={showDrawer} aria-label="Toggle Menu" role="button" className="bg-transparent border-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-6 h-6 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16"></path>
        </svg>
      </button>
    </div>
            </div>
        </nav>
            
  <Drawer
           placement={placement}
           closable={true}
           onClose={onClose}
           open={open}
           key={placement}
           className="text-white w-full lg:w-3/4 font-ysabeau !bg-darkish/80 backdrop-blur-xl"
         >
    <ul className="flex flex-col text-3xl">
      <li role="menuitem">
        <Link onClick={onClose} href="/" aria-label="Home">
          Home
        </Link>
      </li>
      <li role="menuitem">
        <Link onClick={onClose} href="/about" aria-label="About Us">
          About Us
        </Link>
      </li>
      <li role="menuitem">
        <Link onClick={onClose} href="/submissions" aria-label="Submissions">
          Submissions
        </Link>
      </li>
      <li role="menuitem">
        <Link onClick={onClose} href="#contact" aria-label="Contact Us">
          Contact Us
        </Link>
      </li>
    </ul>
         </Drawer>

        </header>
    );
};

export default Navbar;
