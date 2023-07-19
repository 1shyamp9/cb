import { Contact } from "../models/contactModel.js";

export const CreateContact = async (req, res) => {
    try {
        const { name, mobile, address } = req.body;
        let contact = await Contact.findOne({ mobile })
        if (contact) {
            return res.status(404).json({
                success: false,
                message: "Contact Already Exists"
            })
        }
        contact = await Contact.create({ name, mobile, address, user: req.user._id })
        res.status(201).json({
            success: true,
            message: "Contact Created Successfully"
        })
    } catch (error) {
        console.log();
    }
}
export const viewContact = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact Not Exists"
            })
        }
        res.status(201).json({
            success: true,
            contact,
        })
    } catch (error) {
        console.log();
    }
}
export const updateContact = async (req, res) => {
    try {
        const { name, mobile, address } = req.body;
        let contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact Not Exists"
            })
        }
        const updatedContact = await Contact.findByIdAndUpdate(contact, { $set: { name, mobile, address } })
        res.status(201).json({
            success: true,
            message:"Contact Updated successfully",
            updatedContact,
        })
    } catch (error) {
        console.log();
    }
}
export const deleteContact = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact Not Exists"
            })
        }
        contact.deleteOne();
        res.status(201).json({
            success: true,
            message:"Contact Deleted successfully"
        })
    } catch (error) {
        console.log();
    }
}