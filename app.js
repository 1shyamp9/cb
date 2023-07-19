import { configDotenv } from 'dotenv';
import express from 'express';
import { userRouter } from './routes/userRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { contactRouter } from './routes/contectRouter.js';

export const  app = express();
configDotenv({
    path: './database/config.env'
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use('/user',userRouter);
app.use('/contact',contactRouter);
