import Link from "next/link"

export default function Blogs(){
    const blogs = [
        {
            id: 1,
            model : 2004,
            title : "Unique",
            description : "Exelence working principle "
            
        },
        {
            id: 2,
            model : 2005,
            title : "Power",
            description : "Exelence working principle "
            
        },{
            id: 3,
            model : 2006,
            title : "Honda",
            description : "Exelence working principle "
            
        },{
            id: 4,
            model : 2007,
            title : "Hero",
            description : "Exelence working principle "
            
        },{
            id: 5,
            model : 2008,
            title : "Star",
            description : "Exelence working principle "
            
        }   ]
    return(
        <div className='w-full h-screen bg-slate-950' >
            {
                blogs.map((data) => ( 
                    <Link className='mx-auto text-white text-center pt-5 ' key={data.id} href={`./Blogs/${data.model}`} >
                    
                    <h1 className='border border-gray-950 py-1 ' >{data.title} 
                  </h1>

                    </Link>
                ))
            }
        </div>
    )
}