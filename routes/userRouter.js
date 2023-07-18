import express from 'express';
import { CreateUser, UserLogin, UserLogout } from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter.post('/new',CreateUser);
userRouter.post('/login',UserLogin);
userRouter.get('/logout',UserLogout);