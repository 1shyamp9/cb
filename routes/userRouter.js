import express from 'express';
import { CreateUser, UserDelete, UserLogin, UserLogout, UserProfile } from '../controllers/userController.js';
import { isAuth } from '../middleware/auth.js';

export const userRouter = express.Router();

userRouter.post('/new', CreateUser);
userRouter.post('/login', UserLogin);
userRouter.get('/me', isAuth, UserProfile);
userRouter.get('/logout', isAuth, UserLogout);
userRouter.delete('/delete', isAuth, UserDelete);