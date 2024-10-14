let todos =[
   {
    id : 1,
    todo : "Fajar Prayer",
    isCompleted : false
   },
   {
    id : 2,
    todo : "Recite Yaseen",
    isCompleted : false
   },
   {
    id : 3,
    todo : "Watch React Router",
    isCompleted : false
   },
   {
    id : 4,
    todo : "Watch Context API",
    isCompleted : false
   },
   {
    id : 5,
    todo : "Watch Redux Toolkit",
    isCompleted : false
   },
]
export async function GET(request) {
    return(
        Response.json({
            data: todos,
            msg : "API Fetch succeessfully",
        })
    );
}



export async function POST(request) {
    const data = await request.json()
    const obj = {
        ...data,
        id : todos.length + 1,
        isCompleted : false     
    }
    todos.push(obj)
    return(
        Response.json({
            data: todos,
            msg : "API Added succeessfully",
        })
       
    )
    }