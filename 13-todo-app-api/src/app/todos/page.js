import {AddTodo} from "@/actions/todos";

export default async function Todos(){
    let res = await fetch("http://localhost:3000/api/todos",{
        cache : "no-cache",
    })
    res = await res.json()
    // console.log("Todos", res);
    
    return(
       <div className=" bg-transparent text-center   ">
        <h1 className="text-3xl text-white font-serif font-bold">Todos</h1>
            <form action={AddTodo}>
            <input
               placeholder="Add todo"
               type="text"
               name="todo"
            className="mx-auto py-5 bg-transparent border border-gray-500 px-5" />
            <input type="submit"  value={"Add Todo"}
             className="bg-blue-500 py-5 px-5 mx-2" />
            
        </form>
<div className="flex gap-5 flex-wrap">{
  res.data?.map((todo) => (
    <div className=" w-72 mx-auto mt-2  py-4 border-2 border-gray-500 text-center" key={todo.id}>
        <p className="text-2xl text-white ">{todo.id}</p>
        <h1 className="text-white text-2xl font-normal font-serif">{todo.todo}</h1>
        
    </div>
  ) )
  }</div>
       </div>
    )
}