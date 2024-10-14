'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header(){
    const pathname = usePathname()
    return(
        <nav className=' py-4 bg-slate-800 w-full '>
      <ul className='flex gap-x-16 justify-center ' >
        <li>
          <Link className={`link ${pathname === '/' ? 'active text-blue-500' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/todos' ? 'active text-blue-500 ' : ''}`}
            href="/todos"
          >
            Todos
          </Link>
        </li>
      </ul>
    </nav>
    )
}