'use server'

import { revalidatePath } from "next/cache"


export async function addTodo(formData){
    let todo =  formData.get('todo')
    try{
    await fetch ('http://localhost:3000/api/todos',{
        method : "POST",
        body : JSON.stringify({ todo })
    })
    
    revalidatePath("/todos")
    }catch(err){
        console.log(err);
        
    }

}
export async function UpdateTodo(obj){
    try{
    await fetch ('http://localhost:3000/api/todos',{
        method : "PUT",
        body : JSON.stringify(obj)
    })
    revalidatePath("/todos")
    }catch(err){
        console.log(err);
        
    }

}

export async function DeleteTodo(obj){
    try{
    await fetch ('http://localhost:3000/api/todos',{
        method : "DELETE",
        body : JSON.stringify(obj)
    })
    revalidatePath("/todos")
    }catch(err){
        console.log(err);
        
    }

}