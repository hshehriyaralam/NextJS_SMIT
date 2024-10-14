import { addTodo } from "@/actions/todos"
import Link from "next/link"
import { Input } from "postcss"
import TodoForm from "@/Components/TodoForm"

export default async function ToDos(){
    let req = await fetch('http://localhost:3000/api/todos/',{
        cache : "no-cache"
    })
    req = await req.json()
    console.log("Req =>",req)
    return(
        <div className="w-full h-min-screen bg-zinc-900">
            <h1 className="text-5xl font-sans text-center py-2">
                Todos
            </h1>
            
            <TodoForm />
            {
                req.data?.map((todo) => (
                    <Link key={todo.id}
                     href={`/todos/${todo.id}`}>
                        <h1 className="border p-2 text-center text-3xl  w-2/3 mx-auto my-3">
                        {todo.todo}
                        </h1>
                    </Link>
                ) ) 
            }
        </div>
    )
}