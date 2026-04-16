//Es file me hmne data base ko cconnect karne ka code likha hao jo ke 
//index.js me export kr diya


import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

const connectDB= async()=>{
    try {
       
    const connectionInstance= await mongoose.connect(`${process.env.MONGIDB_URI}/${DB_NAME}`)
        console.log (`\n mongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("mongooDB connection error",error);
        process.exit(1)
        
    }

}
export default connectDB