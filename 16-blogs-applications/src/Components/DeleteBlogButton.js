'use client'
import { DeleteBlog } from "../../actions/blog"
import  {useRouter}  from "next/navigation"
const  DeleteBlogButton  = ({ id }) =>{
    const router = useRouter()
    return(
        <button onClick={async () => {
            await DeleteBlog(id)
            router.push('/Blog')
        }}
    className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">
    Delete
</button>
    )
}

export default DeleteBlogButton;