const todos = [
    {
        id : 1,
        todo : "Fajar prayer",
        isComplete : false,
    },
    {
        id : 2,
        todo : "Zohar prayer",
        isComplete : false,
    },
    {
        id : 3,
        todo : "asar prayer",
        isComplete : false,
    },
    {
        id : 4,
        todo : "maghrib prayer",
        isComplete : false,
    },
    {
        id : 5,
        todo : "Isha prayer",
        isComplete : false,
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

// export async function POST(request) {
//     const data = await request.json()
//     const obj = {
//         ...data,
//         isComplete : false,
//         id : todos.length + 1
//     }
//     todos.push(obj)
//     console.log("Data  from  frontend to backend => ", data)
//     return  Response.json(
//         { 
//             data : todos,
//             msg : "Get added Successfuly"
//          })
        
// }


