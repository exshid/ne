import Link from 'next/link';

import { BlogTitle } from '@/components/blog-title';
import { cn } from '@/lib/utils';


export function NavigationBar() {
  return (
    <div
      className={cn(
                'flex h-8 w-max flex-row items-center space-x-2 max-xs:text-sm sm:space-x-4 text-darkish dark:text-white',
        className,
      )}
    >
      
      <Link href="/">
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark">
        Home
        </span>
      </Link>
      <Link
        href="/about"> 
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        About
        </span>
      </Link>
      <a
    href="#books" 
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Books
      </a>
         
      <a
        href="#services"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Editorial Services
      </a>
      <a
href="#contact" className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Contact
      </a>


        <Link
          className="font-semibold hover:text-accent dark:hover:text-accent-dark"
        >
          {BlogTitle}
        </Link>
    </div>
  );
}
