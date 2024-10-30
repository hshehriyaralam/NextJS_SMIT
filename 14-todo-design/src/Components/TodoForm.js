'use client'

import { addTodo } from "@/Actions/todos";
import { useRef } from "react";

export default function TodoForm() {
    const formRef = useRef(null)

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-purple-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Add a New Todo</h2>
            <form  
            ref={formRef}
            action={async(formData) => {
                await addTodo(formData);
                formRef.current.reset();
            } }
             className="flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Enter your todo..."
                    name="todo"
                    className="w-full p-5 h-16 bg-transparent border border-gray-600 rounded-lg text-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="submit"
                    className="p-4 h-16 rounded-lg text-lg font-semibold bg-purple-700 hover:bg-purple-800 transition duration-300 shadow-lg transform hover:scale-105"
                    value={"Add Todo"}
                 />
                   
                
            </form>
        </div>
    );
}
