export default function QoutesCards({quotes, author}){
    return(
        <div className="border-gray-500 border-2 w-3/4 py-5 text-center  mx-auto my-2">
            <h1 className="text-2xl font-serif font-semibold
            text-white">{quotes}</h1>
            <h1  className="text-1xl font-sans font-normal text-blue-500">{author}</h1>
        </div>
    )
}