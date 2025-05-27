import mysql from "mysql2/promise";
import { env } from "./config/config.js";

async function connectDB(){
    try{
         const mysql_db = await mysql.createConnection({
         host: env.DB_HOST,
         user: env.DB_USER,
         password: env.DB_PASSWORD,
         database: env.DB_DATABASE
    });
    
    console.log("Database connected");
    return mysql_db;
    }
    catch(err){
        console.error("Database connection failed!!  ", err);
    }
}

export default connectDB;

