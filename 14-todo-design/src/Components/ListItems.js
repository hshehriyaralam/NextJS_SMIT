"use client"

import { UpdateTodo,DeleteTodo } from "@/Actions/todos";

import { useState } from "react"

export default function ListItems({ todo }){
const [IsEdit, SetIsEdit] = useState(false)
const [Task, SetTask] = useState("")

const onComplete = async () => {
    let obj = {...todo};
    obj.isComplete = !obj.isComplete
    await UpdateTodo(obj);
}

const OnEdit = async () => {
    if(IsEdit){
        let obj = todo;
        obj.todo = Task
        await UpdateTodo(obj)
        SetIsEdit(false)
        SetTask("")
    }else{
        SetIsEdit(true)   
        SetTask(todo.todo)
    }
}

const OnDelete = async () => {
    DeleteTodo({id : todo.id});
}

    return(

        <div key={todo.id}
        className={`mt-5 border-2  w-5/12 h-24 flex  px-5 py-2 justify-between  mx-auto bg-transparent rounded-lg
        ${todo.isComplete ? 'border-green-900' : 'border-slate-900'}`}
       >
         <div className="flex flex-col  mt-3">
            {IsEdit ?  
            (
                <input value={Task} onChange={(e) => SetTask(e.target.value)}
                className="text-white outline-none bg-transparent border-2 border-gray-900 w-60 h-16 mt-1  px-3 text-lg" />
            ) : 
            (
                
                <span className="text-lg mt-3 ">Task : {todo.todo}</span>
            )
            }
           
         </div>
           <div className="flex flex-wrap  gap-x-4 justify-center items-center" >
             <button  onClick={onComplete}
             className="bg-blue-900 rounded-xl text-white p-2 font-bold">{todo.isComplete ? "Done" : "Not Done"}</button>
             <button className="bg-green-900 rounded-xl text-white p-2 font-bold"
             onClick={OnEdit}
             >Edit</button>
             <button  className="bg-rose-900 h:bg-red-900 rounded-xl text-white p-2 font-bold"
             onClick={OnDelete} >Delete</button>
             </div>
       </div>
    )
}