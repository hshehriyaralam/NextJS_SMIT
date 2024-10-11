import Header from "@/Components/Header"
export default async function QoutesDetails({ params }){
    let singleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`)
    singleQuote = await singleQuote.json()
    // console.log(singleQuote);
    
    return(
        <div className="w-full h-screen  bg-fuchsia-900 text-white ">
            
            <h1 className="text-2xl font-bold font-sans  text-center">
               Qoutes  ID  {params.id}
            </h1>
            <div className="w-8/12 py-4 text-center mx-auto mt-10 border-2 border-gray-500" >

           <p className="text-1xl font-serif font-normal  text-white" >
            {singleQuote.quote}
           </p>
            <p className="text-1xl font-serif font-normal text-red-600" >{singleQuote.author}</p>
            </div>
        </div>
    )
}