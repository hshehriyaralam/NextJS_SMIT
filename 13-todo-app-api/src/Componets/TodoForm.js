"use client"
 import { addTodo } from "@/actions/todos"

 export default function TodoForm(){
        return(
            <form action={AddTodo}>
            <input
               placeholder="Add todo"
               type="text"
               name="todo"
            className="mx-auto py-5 bg-transparent border border-gray-500 px-5" />
            <input type="submit"  value={"Add Todo"}
             className="bg-blue-500 py-5 px-5 mx-2" />
            
        </form>
        )
 }