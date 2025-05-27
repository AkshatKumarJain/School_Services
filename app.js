import express from "express"
import { env } from "./config/config.js"
import connectDB from "./connection.js"

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(env.port, ()=> {
    console.log(`The server is running at port: ${env.PORT}.`)
});