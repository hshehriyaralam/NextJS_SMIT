import BlogModal from "@/app/lib/modals/BlogModal";

export async function GET(request, { params }){
    let id = params.id
    let blog = await BlogModal.findById(id)
    return( Response.json(blog))
}


export async function PUT(request, { params }){
    let id = params.id
   const editBlog = await request.json();
   const Updated = await BlogModal.updateOne({
    _id : id,
   },
   {
    ...editBlog,
   })
    return( Response.json({blog : Updated , msg : "Blog Updated Successfully"}))
}
export async function DELETE(request, { params }){
    const id = params.id   
    let blog = await BlogModal.deleteOne( { _id: id}) 
    return( Response.json({ 
        msg : "Blog Deleted Successfully "
    }
    ))
}
