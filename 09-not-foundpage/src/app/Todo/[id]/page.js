import { notFound } from "next/navigation";

export default async function TodoDeatils({ params }){
    let  SingleTodo = await fetch(`https://dummyjson.com/todos/${params.id}`)
    SingleTodo = await SingleTodo.json()
    console.log("SingleTodo ==>", SingleTodo);
    if(SingleTodo.message){
        notFound()
    }
    

    return(
        <div className="w-full h-screen bg-indigo-950 py-10">
            <div className="border-gray-600 border-2 w-8/12 py-4 mt-5 mx-auto ">
          <p className="text-2xl font-sans mx-10 ">
          Todos :   {SingleTodo.todo}
        </p>
        <div className="flex gap-x-20  mx-10 mt-2">
            <p className="text-blue-500">ID :{SingleTodo.id}</p>
            <p className="text-orange-500" > User ID :{SingleTodo.id}</p>
            <p className="text-red-500" >Completed  :{SingleTodo.id}</p>
        </div>
      </div>
        </div>
    )
}
