import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full  h-screen bg-gray-950  text-white text-2xl font-smibold py-20  text-center">
      <h1> Dynamic Rounting </h1>
      <Link href={"./Blogs"} >
      <button className="bg-purple-500 p-2 my-2 mx-6 px-4 rounded text-white"> Blogs</button>
      </Link>
    </div>
      );
}
