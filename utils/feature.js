import jwt from "jsonwebtoken";

export const createCookie = async (res, statusCode, user, message) => {
    try {
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRATE);
        res.status(statusCode).cookie('token', token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message
        })
    } catch (error) {
        console.log(error);
    }
}