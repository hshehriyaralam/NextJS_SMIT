// 'use client'
import Header from "@/Components/Header"
export const metadata = {
    title : "Qoutes"
} 
import QoutesCard from "@/Components/QoutesCard.jsx"
import Link from "next/link"
let  Qoutes =  async ()  => {
    let quotes  = await fetch("https://dummyjson.com/quotes")
    quotes =  await quotes.json()
    // console.log("Qoutes =>",qoutes);
    
    return(
        <div className="text-center w-full  h-min-screen bg-cyan-950 ">
         <Header />
            <h1 className='text-3xl font-sans text-centerz my-10' >Qoutes</h1>

         {quotes.quotes.map((data) => (
            <Link  href={`./Qoutes/${data.id}`}
            key={data.id} >

            <QoutesCard  author={data.author} quote={data.quote} />
            </Link>
             ))}
            
        </div>
    );
}

export default Qoutes