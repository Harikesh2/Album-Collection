import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

// app.use(cors())
// this is one way of intializing the cors the another ways is this where we are using object in the cors

// app.use is used for the using of middleware in our nodejs code
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// here we are using express.json and urlencoded to get a limited data request in our program
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("Public"))
// this is used for image file access to our user by a request

app.use(cookieParser())
// the use of cookieParser is to perform CRUD operation on our user browser




export {app}

