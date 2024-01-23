// require('dotenv').config({path: './env'})
// this syntax is not most effective ways to do this because we are using modules

import dotenv from "dotenv"
import connectDB from "./DB/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'
})
// it will create a consistancey in our code, however we have to create the expermental in our package.json we have to add this experimental by (-r dotenv/config --experimental-json-modules)

connectDB()
.then(()=>{
 
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on PORT : ${process.env.PORT}`);
} )
})
.catch((Error)=>{
    console.log("Mongo DB connection failed !!!", Error);
})




