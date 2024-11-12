"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import {getSingleBlog, UpdateBlog}  from "../../../../../actions/blog";
export default function EditBlog({ params }) {
    const formRef = useRef(null)
    const router = useRouter()
    const [blogDetail, setBlogDetail] = useState({
        title : "",
        author : "",
        body : "",
    })
    // useEffect(()=>{
    //     getBlogDetail();
    // },[params])
    useEffect(() => {
      async function fetchParams() {
          const resolvedParams = await params;
          getBlogDetail(resolvedParams.id);
      }
      fetchParams();
  }, [params]);
  
  async function getBlogDetail(id){
    const blog = await getSingleBlog(id)
    if(blog){
        setBlogDetail({
            ...blog,
        })
    }
}


  //  async function getBlogDetail(){
  //   const blog = await getSingleBlog(params.id);
  //   if(blog){
  //       setBlogDetail({
  //           ...blog,
  //       })
  //   }}   
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Blog</h2>
        
        <form 
        ref={formRef}
        // action={async () => {
        //   const obj = {
        //     ...blogDetail,
        //   }
        //   console.log("Object Blogs",obj);
        //    await UpdateBlog(params.id, obj)
        //    router.push("/Blog")
        //    formRef.current?.reset()
        // }}
        action={async () => {
          const resolvedParams = await params;  // Await params to resolve the Promise
          const obj = { ...blogDetail };
          console.log("Object Blogs", obj);
          
          await UpdateBlog(resolvedParams.id, obj);  // Access id after resolving
          router.push("/Blog");
          formRef.current?.reset();
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
              value={blogDetail.title}
              onChange={(e) => setBlogDetail({...blogDetail, title : e.target.value})}
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
              value={blogDetail.author}
              onChange={(e) => setBlogDetail({...blogDetail, author : e.target.value})}
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
            value={blogDetail.body}
            onChange={(e) => 
                setBlogDetail({...blogDetail, body : e.target.value})}
              placeholder="Enter blog description"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
             />
          </div>

          {/* Submit Button */}
          <input type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" value={"Edit Blog"} />
        </form>
      </div>
    </div>
  );
};



      