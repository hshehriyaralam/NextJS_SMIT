import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-48 w-full h-screen">
    
    <h1 className="text-3xl font-semibold">App Routing</h1>


    <div>
    <Link href={"./Blog"}>
    <button className="bg-purple-500 p-2 my-2 px-4 rounded text-white">See All Details</button>
    </Link>
    </div>
    <div>
    <Link href={"./Aboutus"}>
    <button className="bg-purple-500 p-2 my-2 px-4 rounded text-white">About US</button>
    </Link>
    </div> <div>
    <Link href={"./contact"}>
    <button className="bg-purple-500 p-2 my-2 px-4 rounded text-white">Contact</button>
    </Link>
    </div>
    <div>
    <Link href={"./Profile"}>
    <button className="bg-purple-500 p-2 my-2 px-4 rounded text-white">Profile</button>
    </Link>
    </div>

    <div>
    <Link href={"./Dashboard"}>
    <button className="bg-purple-500 p-2 my-2 px-4 rounded text-white">Dashboard</button>
    </Link>
    </div>
    
    </div>
  );
}
