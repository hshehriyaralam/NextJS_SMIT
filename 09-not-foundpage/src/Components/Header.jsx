'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function Header(){
    const pathname = usePathname()
    return(
        <div className="w-full py-5 bg-indigo-950  ">
             <nav>
      <ul className='flex gap-x-10 text-white font-semibold justify-center '>
        <li>
          <Link className={`link ${pathname === '/' ? 'active underline ' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/About' ? 'active underline ' : ''}`}
            href="/About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/Todo' ? 'active underline ' : ''}`}
            href="/Todo"
          >
            Todo
          </Link>
        </li>
      </ul>
    </nav>
        </div>
    )
}