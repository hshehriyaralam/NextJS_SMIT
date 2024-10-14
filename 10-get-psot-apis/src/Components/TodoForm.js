'use client'
import { addTodo } from "@/actions/todos";
import { useRef } from "react";

export default function TodoForm(){
    const formRef = useRef(null)
    return(
        <form 
        ref={formRef}
            action={ async (formData) =>{
                await addTodo(formData)
                formRef.current?.reset()
            }}
            className="mx-auto w-2/3 flex gap-2  ">
            <input
            placeholder="Add todo"
            type="text"
            name="todo"
            className="border p-2 flex flex-grow  bg-zinc-900 text-white text-2xl outline-none"
            />
            <input type="submit"
             className="bg-purple-500 rounded p-2 px-4"
             value={"Add Todo"}
             />
            </form>
    )
}