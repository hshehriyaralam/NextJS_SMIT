import Header from "@/Components/Header";
export default async function QoutesDdetails ({ params }){
    let Singlequotes  = await fetch(`https://dummyjson.com/quotes/${params.id}`)
    Singlequotes =   await Singlequotes.json()
    console.log(Singlequotes);
    return(
        <div className='w-full h-screen bg-cyan-950 text-white 
        text-center ' >
            <Header />
            <h1 className='text-3xl  text-white font-semibold font-sans py-10 '>
                Qoutes Details
            </h1>
            <div className='w-2/3 border-gray-900 mx-auto my-6 border-2 p-5'> 
            <h1 className="text-2xl text-white ">{Singlequotes.quote}
            </h1>
            <h1 className="text-2xl text-red-900 mt-5 ">{Singlequotes.author}
            </h1>
            </div>
         

        </div>
    )
    
}