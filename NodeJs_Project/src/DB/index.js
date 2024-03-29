import mongoose from "mongoose";
import DB_Name from "../constants.js";


const connectDB = async () =>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB Host ${connectionInstance.connection.host}`);
        // connectionInstance.connection.host this line means that we have to know on which host our data base in connection testing, production or local system!!

    } catch (error) {
        console.log("Mongo DB connection Error", error);
        process.exit(1);
        throw error;

        // exit used is very important because it's gives us clarity why the DB is not connected

        
    }
}


//  another way of connecting db in main index.js files
/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

export default connectDB