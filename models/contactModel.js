import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
        unique:true,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export const User = new mongoose.model('User',contactSchema);