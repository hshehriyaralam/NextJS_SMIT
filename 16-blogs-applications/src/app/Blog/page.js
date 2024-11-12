import BlogForm from "@/Components/BlogForm";
import Link from "next/link"; // import Link from Next.js

export default async function Blogs() {
    let blogs = await fetch("http://localhost:3000/api/Blogs");
    blogs = await blogs.json();    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            <div className="w-10/12 max-w-4xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">All Blogs</h2>
                    <Link href={'Blog/addBlog'}>
                        <h1 className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Add Blog
                        </h1>
                    </Link>
                </div>
                {
                    blogs.data?.map((blog) => (
                        <Link key={blog._id} href={`/Blog/${blog._id}`} >
                        <div  className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <h1 className="font-semibold text-xl text-gray-900 mb-1">
                                {blog.title}
                            </h1>
                            <h2 className="text-green-600 mb-3 ">
                                <span className="font-medium">Author:</span> {blog.author}
                            </h2>
                            <p className="text-gray-700 text-small">
                                Description: {blog.body}
                            </p>
                            {/* <div className="flex space-x-4 mt-4">
                                <button 
                                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div> */}
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
