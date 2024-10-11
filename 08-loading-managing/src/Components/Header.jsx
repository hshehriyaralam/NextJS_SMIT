import Link from "next/link"
export default function Header(){
    return(
        <div className="w-full h-20 bg-transparent  py-5" >
            <ul className='flex gap-x-20 justify-center text-1xl font-semibold '>
                <Link href={'./'}>
                <li className="cursor-pointer" >Home</li>
                </Link>
                <Link href={'./About'}>
                <li className="cursor-pointer">About</li>
                </Link>
                <Link href={'./Jobs'}>
                <li className="cursor-pointer">Jobs</li>
                </Link>
                <Link href={'./Qoutes'}>
                <li className="cursor-pointer">Qoutes</li>
                </Link>
            </ul>

        </div>
    )
}