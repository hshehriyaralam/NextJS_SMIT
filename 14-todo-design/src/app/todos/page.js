import ListItems from "@/Components/ListItems";
import TodoForm from "@/Components/TodoForm";


export default async function Todos() {
  let res = await fetch('http://localhost:3000/api/todos',{
    cache : "no-cache"
  })
  res = await res.json()
  console.log("todos", res)
  return (
    <div  >
      <TodoForm />
      <div className="mt-5">
        {res.data?.map((todo) => (
         <ListItems todo={todo} key={todo.id} />
        ))}
              
            </div>
    </div>
    
  )}
