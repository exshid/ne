'use client'
import Link from 'next/link';

import { blogConfig } from '@/config';
import React, {useState, useEffect, FormEvent } from 'react';

export const  Contact = () => {

    return (

        <section id="contact" className="min-h-screen flex flex-col lg:flex-row items-stretch text-white ">
        <div className="lg:flex w-full p-8 lg:w-1/2 bg-gradient-to-r from-rose-600 to-rose-900 relative items-center">
        <div className="w-full px-2 xl:px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">Get In Touch</h1>

            <p className="text-xl lg:text-3xl my-4">Email us at<br/>email@example.com</p>
        </div>

    </div>

<div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 px-0 z-0 bg-white text-[#151515]">
<div className="w-full py-6 z-20">
<p  className="text-3xl my-4 text-[#151515]">
  CONTACT FORM
    </p>
    <form action="" className="contact-form sm:w-2/3 lg:w-full w-full px-4 lg:px-4 xl:px-0 mx-auto">
        <div className="pb-2 pt-4">
            <input required type="email" name="email" id="email" placeholder="Email" className="bg-white block w-full p-4 border text-lg rounded-sm"/>
        </div>
        <div className="pb-2 pt-4">
            <input required className="bg-white block w-full p-4 text-lg border rounded-sm " type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="pb-2 pt-4">
            <textarea required className="contact-placeholder bg-white block w-full p-4 text-lg border min-h-[151px]  rounded-sm" name="message" id="message" placeholder="Your message..." />
        </div>
        <div className="relative pb-2 pt-4">
            <button className=
            {`uppercase block w-full p-4 text-lg text-white rounded focus:outline-none transition hover:-translate-y-[4px] bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 `}>Send</button>
        </div>
        <>
        <p className="text-xs xs:text-sm text-[gray]">By submitting this form you agree to <Link href="policies">
<span> our privacy policy</span>
</Link>
</p>
       
</>

    </form>
</div>
</div>
</section>

);
  }
