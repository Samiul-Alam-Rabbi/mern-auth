import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "config/config.env"});

const port = process.env.PORT || 5001;
const mongo = process.env.MONGO;

mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(port, ()=> {
        console.log(`Server is running on http://localhost:${port}`);
    })
}).catch(error=>console.log(error));
