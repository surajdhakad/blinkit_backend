import express, { request } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(helmet({
    crossOriginResourcePolicy: false
}));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({
        message: "Server is running on " + PORT
    });
});

app.use('/api/user',userRouter)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("✅ Server is running on port", PORT);
    });
}).catch((error) => {
    console.error("❌ Failed to connect to MongoDB", error);
});


