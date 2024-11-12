import  {connectDB}  from "@/app/lib/dbConnect";
import BlogModal from "@/app/lib/modals/BlogModal";
export async function GET(request) {
    await connectDB()
    const Blogs = await BlogModal.find()
    return Response.json({
        data : Blogs,
        msg : "Data Fetch successfully "
    })
}

export async function POST(request) {
    await connectDB()
    const blog = await request.json()
    const blogAdded = await new BlogModal({...blog})
    await blogAdded.save()
    return Response.json({
        data : blogAdded,
        msg : "Blog Added Successfully "
    })
}

