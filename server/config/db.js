import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const ConnectMongoDB = async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log("server is connected to the database ")
        }else{
            console.log("server is not connected to the database ")
        }

    }catch(error){
        console.log(error.message)
    }
}

export default ConnectMongoDB;