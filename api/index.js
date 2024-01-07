import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/role/", roleRoute);
app.use("/api/auth/", authRoute);

//response handler middleware
app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong";
    return res.status(statusCode).json({
        success : [200, 201, 204].some(a => a === obj.status) ? true : false,
        status : statusCode,
        message : message,
        stack : obj.stack,
        data : obj.data
    });
});

//DB Connection
const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database")
    } catch (error) {
        throw error;
    }
}


app.listen(8800, () => {
    connectMongoDB();
    console.log("Connected to server");
});
