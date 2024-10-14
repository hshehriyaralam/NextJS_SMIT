import Link from "next/link";
import addTodo from "@/actions/todos";
import TodoForm from "@/Components/TodoForm";
export default  async function Todos(){
    let req = await fetch ('http://localhost:3000/api/todos/',{
        cache : "no-cache"
    })
    req = await req.json()
    console.log("Task =>",req);
    
    return(
        <div className="bg-slate-800 w-full min-h-screen pt-5" >
            <TodoForm />       
            {
                req.data?.map((todo) => (
                    <Link href={`/todos/${todo.id}`}  key={todo.id}  >
                    <h1 className="border p-2 font-serif text-center text-2xl w-2/5 mx-auto my-3"  >
                        {todo.todo}
            </h1>
                    </Link>
                ))
            }
           
        </div>
    )
}