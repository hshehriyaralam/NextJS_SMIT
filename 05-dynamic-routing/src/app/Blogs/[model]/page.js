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


export  default function BlogsDetails ( { params }){
    const blogDetail = blogs.find((data) => data.model == params.model)
    return(
        <>
        <h1>{blogDetail.model}</h1>
        <h1>{blogDetail.title}</h1>
        <h1>{blogDetail.description}</h1>
        </>
    )
}