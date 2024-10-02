'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export function Header() {
  const pathname = usePathname()
  return (
    <nav className='bg-purple-900 flex hustify-centet items-center py-2 gap-10  ' >
      <Link className={`link ${pathname === '/' ? 'active underline ' : ''}`} href="/">
        Home
      </Link>
      <Link
        className={`link ${pathname === '/Dashboard' ? 'active underline' : ''}`}
        href="/Dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`link ${pathname === '/AllBlogs' ? 'active underline' : ''}`}
        href="/AllBlogs"
      >
        Blogs
      </Link>
      
    </nav>
  )
}