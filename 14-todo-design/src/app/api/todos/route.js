let todos = [
    {
        id : 1,
        todo : "Fajar Prayer",
        isComplete : false,
    },
    {
        id : 2,
        todo : "Zohar Prayer",
        isComplete : false,
    },  
     {
        id : 3,
        todo : "Fajar Prayer",
        isComplete : false,
    },
       {
        id : 4,
        todo : "Asar Prayer",
        isComplete : false,
    },
       {
        id : 5,
        todo : "Maghrib Prayer",
        isComplete : false,
    }, 
      {
        id : 6,
        todo : "Isha Prayer",
        isComplete : false,
    }
]


export async function GET(request) {
    return(
        Response.json({
            data : todos,
            msg : "Todos Fetch Successfuly"
        })

    )
}

export async function POST(request) {
    let data = await request.json()
    let obj = {
        ...data,
        id : todos.length + 1,
    } 
    todos.push(obj)
    return(
        Response.json({
            data : todos,
            msg : "Todos added Successfuly"
        })

    )
}

export async function PUT(request) {
    let data = await request.json()
    const todoIndex = todos.findIndex((todo) => todo.id ===  data.id )
    todos[todoIndex] = data;  
    return(
        Response.json({
            data : todos,
            msg : "Todos Updated Successfuly"
        })

    )
}

export async function DELETE(request) {
    let data = await request.json()
    const todoIndex = todos.findIndex((todo) => todo.id ===  data.id )
    todos.splice(todoIndex,1)  
    return(
        Response.json({
            data : todos,
            msg : "Todos Updated Successfuly"
        })

    )
}