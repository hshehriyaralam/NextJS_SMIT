'use client'

import { useRef } from "react";
import { AddBlog } from "../../actions/blog";
import { useRouter } from 'next/navigation'

const BlogForm = () => {
    const formRef = useRef(null)
    const router = useRouter()

        
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Blog</h2>
        
        <form ref={formRef}
        action={async (formData) => {
            const obj = {
                title : formData.get("title"),
                author : formData.get("author"),
                body : formData.get("description")
            }
            console.log("Objects Data =>",obj);
            await AddBlog(obj)
            router.push('/Blog')
            formRef.current.reset();
        }}
         className="space-y-4 text-black">
          {/* Blog Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">Blog Title</label>
            <input
            name="title"
              type="text"
              id="title"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Blog Author */}
          <div>
            <label htmlFor="author" className="block text-gray-700 font-medium">Blog Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Blog Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium">Blog Description</label>
            <textarea
              id="description"
              rows="4"
            name="description"

              placeholder="Enter blog description"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
             />
          </div>

          {/* Submit Button */}
          <input type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" value={"Add Blogs"} />
        </form>
      </div>
    </div>
  );
};

export default BlogForm;

      