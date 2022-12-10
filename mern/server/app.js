import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

const app = express();

// Middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());


// Routes
app.use("/", authRoute);


export default app;