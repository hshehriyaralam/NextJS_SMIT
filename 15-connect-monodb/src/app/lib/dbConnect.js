import mongoose from "mongoose";



export default async function connectDB(){
     let isConnected = false
     if (isConnected) return "DB is Already Connected!" 


     try{
        let connected = await mongoose.connect(process.env.MONGODB_URL)
        if(connected.connection.readyState == 1) isConnected = true;    
        console.log("DB is Connected Successfuly.. ");
        
     }catch(error){
        console.log("Error =>", error);
        
     }

}