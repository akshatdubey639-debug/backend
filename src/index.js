//require('dotenv').config() // ew can writhe it like below linw also
import dotenv from "dotenv"
//import mongoose from "mongoose";
//import { DB_NAME } from "./constant";  // IMPORT THE DATA BASE FROM CONSTANT FILE
import connectDB from "./db/index.js";
connectDB()
dotenv.config({
    path:'./env'
})










/*
import expresse from 'express'
const app=express()


// code data base se connect karne ke liye
;(async()=>{ // it is a efes. turant excution ke liye
    try {
        await mongoose.connect(`${process.env.MONGIDB_URI}/${DB_NAME}`)
        app.on(error,()=>{
            console("ERROR",error)
            throw err;
        })
        app.lesten(process.env.PORT,()=>{
            console.log(`1app is listern on port of${process.env.PORT}`)
        })
    } catch (error) {

        console.error("ERROR",error)
        throw err
    }
})()  
*/