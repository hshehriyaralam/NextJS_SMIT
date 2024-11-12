'use server'
import { revalidatePath } from "next/cache"
export async function AddBlog(obj){
    try{
    await fetch ('http://localhost:3000/api/Blogs',{
        method : "POST",
        body : JSON.stringify(obj)
    })
    revalidatePath("/Blog")
    }catch(err){
        console.log(err);   
    }
}

export async function getSingleBlog(id){
    try{
   let res =  await fetch(`http://localhost:3000/api/Blogs/${id}`)
   res = await res.json();
   return res;
    }catch(err){
        console.log(err);   
    }
}

export async function UpdateBlog(id, obj){
    try{
   await fetch (`http://localhost:3000/api/Blogs/${id}`,{
    method : "PUT",
    body : JSON.stringify(obj)
   });
   revalidatePath("/Blog")
    }catch(err){
        console.log(err);   
    }
}


export async function   DeleteBlog(id){
    try{
    await fetch (`http://localhost:3000/api/Blogs/${id}`,{
        method : "DELETE",
    })
    revalidatePath("/Blog")
    }catch(err){
        console.log(err);   
    }
}