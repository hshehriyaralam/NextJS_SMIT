'use client'
import Link from "next/link"
export default function Header(){
    return(
        <div className='w-full   bg-trasnparent  text-white text-1xltext-white font-serif  '>
        <ul className='flex gap-x-10 justify-center py-4'>
            <Link
            href={'./'}
            >
            <li>Home</li>
            </Link>
            <Link
            href={"./About"}>
            <li>About</li>
            </Link>
            <Link
            href={'./Qoutes'}>
            <li>Qoutes</li>
            </Link>
        </ul>
        </div>
    )
}