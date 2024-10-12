import Image from "next/image";
import Header from "@/Components/Header";
import Link from "next/link";


// 

export default async  function Qoutes() {
  let todo = await fetch("https://dummyjson.com/todos/")
  todo = await todo.json()
  // console.log("todo =>", todo);
  
  return (
    <div  className="w-full h-min-screen  bg-indigo-950 text-white" >
      <Header />
      

      {/* <h1 className="text-2xl text-white text-center mt-10">
        {todo.todo}
        </h1> */}
       
      {
        todo.todos.map((data) => (
          <Link href={`./Todo/${data.id}`} key={data.id}> 
          <div className="border-gray-600 border-2 w-8/12 py-4 mt-5 mx-auto ">
          <p className="text-2xl font-sans mx-10 ">
          Todos :   {data.todo}
        </p>
      </div>
          </Link>
        ))
      }
    
     

    </div>
  );
}
