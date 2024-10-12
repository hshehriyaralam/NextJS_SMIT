import Image from "next/image";
import Header from "@/Components/Header";
export default function About() {
  return (
    <div  className="w-full h-screen  bg-indigo-950 text-whitex">
      <Header />
      <h1 className="text-5xl font-serif text-center py-10 ">About</h1>
    </div>
  );
}
