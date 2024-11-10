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