'use client'
export default function QoutesCard( {quote,author} ){
    return(
      <div className="border m-5 border-gray-500 p-5 ">
        <h1 className="font-semibold text-2xl " >
            {quote}
        </h1>
        <h1 className='font-normal text-1xl ' >
            Qoute By  
            <span className="font-semibold text-blue-600 px-3" >
            {author}
             </span>

        </h1>
      </div>
    )
}