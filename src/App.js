// APP.js me hum cors ko import karte hain middleware lagane ke liye
// cookie-parser ka use cookies ko read aur handle karne ke liye hota hai

import express from "express";
import cors from "cors"; 
// CORS ek security feature hai jo browser use karta hai
// taaki ek website dusri website/server se bina permission data access na kar sake

import cookieParser from "cookie-parser";

const app = express();


// 🔹 CORS Middleware
// Isme hum frontend ka origin allow karte hain
// taaki frontend backend se request kar sake

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // frontend URL (.env se aayega)
    credentials: true // cookies allow karne ke liye (yaha spelling important hai)
  })
);


// 🔹 Cookie Parser Middleware
// Ye incoming request ki cookies ko read karne me help karta hai

app.use(cookieParser());


// 🔹 Express Configuration
// Ye settings frontend se aane wali request ko handle karti hain

// JSON data ko accept karega (max 16kb)
app.use(express.json({ limit: "16kb" }));


// Form data (URL encoded) ko accept karega
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb"
  })
);


// Static files serve karne ke liye
// Example: images, css, pdf, etc.

app.use(express.static("public"));

app.use (cookiesparser())


// App export karte hain taaki index.js me use ho sake
export { app };