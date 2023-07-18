import { app } from "./app.js";
import { Database } from "./database/database.js";

Database;

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
});