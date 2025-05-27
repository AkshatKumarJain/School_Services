import express from "express"
import { env } from "./config/config.js"
import router from "./routes/api.route.js"
// import connectDB from "./connection.js"
import schoolModel from "./models/school.model.js"

const app = express();

app.use(express.json());

app.use(router);

app.listen(env.PORT || 8000, ()=> {
    console.log(`The server is running at port: ${env.PORT}.`)
});