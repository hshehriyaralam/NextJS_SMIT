'use client'
import addTodo from "@/actions/todos"
import { useRef } from "react"
export default function TodoForm(){
    const formRef = useRef(null)
    return(
        <form className="mx-auto w-2/5 flex gap-2 border "
        ref={formRef}
        action={
            async (FormData) => {
                await addTodo(FormData)
                formRef.current?.reset()
            }}
        >
           <input 
           className=" p-2 flex flex-grow  bg-zinc-900 text-white text-2xl outline-none"
           placeholder="Add Todo"
           name="todo"
           />
           <input 
           className="p-3 text-1xl font-serif "
           type="submit"
           value={"Add Todo"}
           />
        </form>
    )
}