import Header from "@/Components/Header";
import QoutesCards  from "@/Components/QoutesCards";
import Link from "next/link";

export const revalidate = 5

export default async function Qoutes(){
    let quotes  = await fetch("https://dummyjson.com/quotes/random")
     quotes = await quotes.json()
     console.log("qoutes  =>", quotes);
     
   
   
    return(
        <div className="w-full h-screen bg-fuchsia-900">
            <Header />
            <h1 className="text-2xl font-serif text-center pt-3">
                Qoutes
            </h1>
           {
            //    quotes.quotes.map((data) => (
                //    <Link key={data.id} href={`./Qoutes/${data.id}`}>
                   <QoutesCards   quotes={quotes.quote} author={quotes.author} />
            // </Link>//
                // ))
            }
        </div>
    )
}