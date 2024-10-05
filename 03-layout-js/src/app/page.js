import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (  
    <div className="w-full h-screen bg-white text-black font-semibold " >
     <h1 className="text-5xl text-center py-16">Hello World </h1>
     <button  className="text-center w-32  h-12 bg-blue-950 text-white mx-48" >
      <Link 
     href={"./Dashboard"}
     className="text-center"
     >Dashboard</Link>
     </button>
     <button className="text-center w-32  h-12 bg-blue-950 text-white" >
      <Link 
     href={"./AllBlogs"}
     className="text-center"
     >AllBlogs</Link>
     </button>
    </div>
  )
}
