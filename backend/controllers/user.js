import mongoose from 'mongoose';
import { User } from '../models/user.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ "Success": "True", "message": users });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: "after" })
        res.status(200).json({ "Success": "True", "message":"user updated successfully", user });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }, req.body, { returnDocument: "after" })
        res.status(200).json({ "Success": "True", "message": "user deleted successfully",user });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}