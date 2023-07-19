import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import ErrorHandler from "./error.js";

export const isAuth = async(req , res , next)=>{
    try {
        const {token} = req.cookies;
        // if(!token){
        //     return res.status(404).json({
        //         success:false,
        //         message:"Please Login First",
        //     })
        // }
        if(!token) return next(new ErrorHandler("Please Login First",404))
        const decoded = await jwt.verify(token,process.env.JWT_SECRATE);
        req.user = await User.findById(decoded);
        next();
    } catch (error) {
        console.log(error);
    }
}