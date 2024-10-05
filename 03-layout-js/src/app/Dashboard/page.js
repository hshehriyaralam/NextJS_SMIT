import Link from "next/link"


export default function Dashboard(){

    
    return(
       <div className='w-full h-screen bg-gray-950 py-5' >
        <Link href={"./Dashboard/profile"}>
        <button className="text-center w-32 mx-96  h-12 bg-blue-950 text-white  ">
        profile
        </button>
        </Link>

        <Link href={"./Dashboard/setting"}>
        <button className="text-center w-32  h-12 bg-blue-950 text-white  ">
        settings
        </button>
        </Link>
       </div>
    )

}