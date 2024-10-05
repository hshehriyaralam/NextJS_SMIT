import Link from "next/link"
export default function DashboardLayout( {children} ){
    return(
        <section className='min-h-screen flex bg-white text-black'>
            <div className='w-1/4 border-r-2 border-r-black'>
            <Link href={'./Dashboard/setting'}>
            <h1 className='text-2xl bg-gray-500 text-center text-white'>Setting</h1>
            </Link>
            <Link href={'./Dashboard/profile'}>
            <h1 className='text-2xl bg-gray-500 text-center text-white my-2'>profile</h1>
            </Link>
            </div>
            <div className='w-2/3 '>
            {children}
            </div>
        </section>
    )
}