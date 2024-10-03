import Link from "next/link";

export default function Dashboard(){
    return(
        <div className="w-full h-screen mx-auto py-20 text-center">
            <h1 className="text-3xl font-semibold"> Dashboard</h1>

            <Link href={'./Dashboard/profile'}>
            <button className="bg-purple-500 p-2 my-2 px-4  mx-6 rounded text-white">Profile</button>
            </Link>

            <Link  href={"./Dashboard/setting"}>
            <button className="bg-purple-500 p-2 my-2 mx-6 px-4 rounded text-white">settings</button>
            </Link>
        </div>
    )
}