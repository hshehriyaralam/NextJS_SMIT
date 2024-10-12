import Link from "next/link";

export default function NotFound(){
    return(
        <div  className="bg-black  w-full h-screen text-white  text-center py-48   ">
            <h1 className="text-4xl text-bold tex-serif ">
                Page Not Found ....
            </h1>
            <br />
            <Link href={'../Todo'}>
            <button className="text-xl text-bold tex-serif w-48 rounded  py-2 bg-blue-900" >
                Pleae Go Back
            </button>
            </Link>
        </div>
    )
}