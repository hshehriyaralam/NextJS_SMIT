'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header(){
    const pathname = usePathname()
    return (
        <nav className='bg-zinc-900 w-full d-flex py-5'  >
        <ul className='flex gap-x-20 justify-center '>
          <li>
            <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === 'todos/' ? 'active underline' : ''}`}
              href="/todos"
            >
              Todos
            </Link>
          </li>
        </ul>
      </nav>
    )
}