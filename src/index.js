// index.js

// 🔹 dotenv ko import karte hain
// dotenv ka use .env file ki values (PORT, DB URL) ko load karne ke liye hota hai

import dotenv from "dotenv";


// 🔹 app ko import karte hain (app.js se)
// app.js me humne express configuration ki thi

import { app } from "/app.js";


// 🔹 Database connection function import karte hain

import connectDB from "./db/index.js";


// 🔹 dotenv configuration
// Ye .env file ko load karega

dotenv.config({
  path: "./.env"   // ⚠️ yaha ".env" hona chahiye, "env" nahi
});


// 🔹 Database connect karte hain
// Agar DB connect ho jaye tabhi server start hoga

connectDB()
  .then(() => {

    // 🔹 Server start karte hain

    app.listen(process.env.PORT || 8000, () => {

      console.log(` Server is running on port: ${process.env.PORT}`);

    });

  })

  .catch((err) => {

    // 🔹 Agar database connect nahi hua

    console.log("MONGODB CONNECTION FAILED", err);

  });







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