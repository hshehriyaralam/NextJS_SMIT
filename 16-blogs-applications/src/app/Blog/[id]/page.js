import DeleteBlogButton from "@/Components/DeleteBlogButton";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default async function BlogDetails({ params }) {
    let res = await fetch(`http://localhost:3000/api/Blogs/${params.id}`);
    res = await res.json()


   
 return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-10/12 max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                    {res.title}
                </h1>
                <p className="text-xl text-gray-700 mb-6 text-center">
                    <span className="font-medium">Author:</span> {res.author}
                </p>
                <div className="text-gray-700 text-lg mb-8">
                    <p>{res.body}</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href={`/Blog/edit/${params.id}`}
                        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                    >
                        Edit
                    </Link>
                   <DeleteBlogButton id={params.id} />
                </div>
            </div>
        </div>
    );
}
