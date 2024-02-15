import mongoose from 'mongoose';
import { User } from '../models/user.js';

export const getAllUsers = async (req, res, next) => {
    try {
        let users = await User.find().populate().exec();
        res.status(200).json({ "Success": "True", "message": users });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const getUser= async (req, res, next) => {
    try {
        let users = await User.findOne({_id:req.params.id}).populate('points').exec();
        res.status(200).json({ "Success": "True", "message": users });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        let user = await User.findOne({ _id: req.params.id })
        if (user) {
             user = await User.findOneAndUpdate({ _id: req.params.id }, {points: [...user.points.filter(quiz => quiz.id!==req.body.id),{"id":req.body.id,"point":req.body.point}]}, { returnDocument: "after" })
             return res.status(200).json({ "Success": "True", "message": "user updated successfully", user });
        }
        else
            return res.status(404).json({ "Success": "False", "message": 'user not found' })
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }, req.body, { returnDocument: "after" })
        res.status(200).json({ "Success": "True", "message": "user deleted successfully", user });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}