// require('dotenv').config({path: './env'})
// this syntax is not most effective ways to do this because we are using modules

import dotenv from "dotenv"
import connectDB from "./DB/index.js";


dotenv.config({
    path: './env'
})
// it will create a consistancey in our code, however we have to create the expermental in our package.json we have to add this experimental by (-r dotenv/config --experimental-json-modules)

connectDB();




