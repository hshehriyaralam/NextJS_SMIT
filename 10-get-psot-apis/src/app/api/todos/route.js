const todos = [
    {
        id : 1,
        todo : "Task 01",
        icComplete : false
    },
    {
        id : 2,
        todo : "Task 02",
        icComplete : false
    },
    {
        id : 3,
        todo : "Task 03",
        icComplete : false
    },      
]

export async function GET(request) {
   return ( 
    Response.json({
    data : todos,
    msg : "Todos fetch successfully"
   })
)
}


export async function POST(request) {
    const data = await request.json();
    console.log('data frontEnd to Bakcend => ', data);
    const obj = {
        ...data,
        isCompleted : false,
        id : todos.length + 1
    }
    todos.push(obj)
    return(
        Response.json({
            data : todos,
            msg : "Todos Added successfully"
           })
    )
}   