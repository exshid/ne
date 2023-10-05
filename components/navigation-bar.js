import Link from 'next/link';

import { BlogTitle } from '@/components/blog-title';
import { cn } from '@/lib/utils';


export function NavigationBar() {
  return (
    <div
      className={cn(
                'flex h-8 w-max flex-row items-center space-x-2 max-xs:text-sm sm:space-x-4 text-darkish ',
        className,
      )}
    >
      
      <Link href="/">
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent ">
        Home
        </span>
      </Link>
      <Link
        href="/about"> 
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent "
      >
        About
        </span>
      </Link>
      <a
    href="#books" 
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent "
      >
        Books
      </a>
         
      <a
        href="#services"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent "
      >
        Editorial Services
      </a>
      <a
href="#contact" className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent "
      >
        Contact
      </a>


        <Link
          className="font-semibold hover:text-accent "
        >
          {BlogTitle}
        </Link>
    </div>
  );
}
