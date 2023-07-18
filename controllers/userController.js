import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createCookie } from "../utils/feature.js";

export const CreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({
                success: false,
                message: "User Already Exists"
            })
        }
        const hashPass = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashPass })
        res.status(201).json({
            success: true,
            message: "User Created Successfully"
        })
    } catch (error) {
        console.log();
    }
}
export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Incurrect Email And Password"
            })
        }
        const isPass = await bcrypt.compare(password, user.password);
        if (!isPass) {
            return res.status(404).json({
                success: false,
                message: "Incurrect Email And Password"
            })
        }
        createCookie(res, 200, user, 'Login Successfully')
    } catch (error) {
        console.log();
    }
}
export const UserProfile = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user:req.user
        })
    } catch (error) {
        console.log();
    }
}
export const UserLogout = async (req, res) => {
    try {
        res.status(200).cookie('token', '', {
            httpOnly: false,
            maxAge: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message: 'Logout Successfully'
        })
    } catch (error) {
        console.log(error);
    }
}