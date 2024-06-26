'use client'
import Link from 'next/link';
import {ScrollWrapper} from '@/components/wrapper';

import { blogConfig } from '@/config';
import React, {useState, useEffect, FormEvent, useRef } from 'react';

export const  Contact = () => {
    const contactSectionRef = useRef(null);

    return (
        <ScrollWrapper>

        <section id="contact" ref={contactSectionRef} tabIndex="-1" aria-label="Contact Section" className="min-h-screen flex flex-col font-ysabeau lg:flex-row items-stretch text-white ">
        <div className="lg:flex w-full p-8 lg:w-1/2 bg-gradient-to-r from-rose-600 to-rose-900 relative items-center">
        <div className="w-full px-2 xl:px-24 z-10">
            <h1 tabIndex="0" className="text-5xl font-bold text-left tracking-wide">Get In Touch</h1>

            <p tabIndex="0" className="text-xl lg:text-3xl my-5">Email us at email@example.com</p>
        </div>

    </div>

<div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 px-0 z-0 bg-darkish text-white">
<div className="w-full py-6 z-20">
<p tabIndex="0" className="text-3xl my-5 text-white font-bold">
  CONTACT FORM
    </p>
    <form action="" aria-label="Contact Form"
    className="contact-form sm:w-2/3 lg:w-full w-full px-5 lg:px-5 xl:px-0 mx-auto">
        <div className="pb-2 pt-5">
        <label className="sr-only" htmlFor="email">Email:</label>

            <input required
            type="email" name="email" id="email" placeholder="Email" aria-required="true" aria-labelledby="email"

            className="bg-darkish block w-full p-4 border text-lg rounded-sm"/>
            
        </div>
        <div className="pb-2 pt-5">
        <label className="sr-only" htmlFor="name">Name:</label>
            <input required
                            aria-required="true"
                            aria-labelledby="name"         
            className="bg-darkish block w-full p-4 text-lg border rounded-sm " type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="pb-2 pt-5">
        <label className="sr-only" htmlFor="message">Message:</label>
            <textarea required
                            aria-required="true"
                            aria-labelledby="message"          
            className="contact-placeholder bg-darkish block w-full p-4 text-lg border min-h-[151px] rounded-sm" name="message" id="message" placeholder="Your message..." />
        </div>
        <div className="relative pb-2 pt-5">
            <button
            type="submit"
            className={`uppercase block w-full p-4 text-lg text-white rounded focus:outline-none transition hover:-translate-y-[4px] bg-gradient-to-r from-rose-600 to-rose-900`}>Send</button>
        </div>
        <>
        <p tabIndex="0" className="text-xs xs:text-sm text-[gray]">By submitting this form you agree to <Link href="policies">
<span> our privacy policy</span>
</Link>
</p>
       
</>

    </form>
</div>
</div>
</section>
</ScrollWrapper>

);
  }
