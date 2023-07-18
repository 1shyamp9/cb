import mongoose from "mongoose";

export const Database = mongoose.connect(process.env.MONGO_URI,{
    dbName:"CB"
}).then((c)=>{
    console.log(`Database is Connected ${c.connection.host}`);
}).catch((e)=>{console.log(e);})