import mongoose from 'mongoose';
import { User } from '../models/user.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import fs from "fs"
import path from 'path'
import { Quiz } from '../models/quiz.js';


const privateKey = fs.readFileSync(path.join(path.resolve(), "../backend/private.key"), "utf-8");

export const signup = async (req, res, next) => {
    try {
        let user = new User(req.body);
        jwt.sign({ username: user.username }, privateKey, { algorithm: 'RS256' }, function (err, token) {
            user.save()
                .then(() => {
                    bcrypt.hash(user.password, 10, async function (err, hash) {
                        user.password = hash
                        user.token = token
                        const quizzes = await Quiz.find()
                        quizzes.forEach(quiz => {
                            user.points.push({ id: quiz.id ,point:0})
                        })
                        user.save()
                            .then(() => res.status(201).json({ "Success": "Account created successfully", "message": user }))

                    });
                })
                .catch((err) => res.status(404).json({ "Success": "False", "message": err.message }))
        });
    } catch (err) {
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!username)
            return res.status(404).json({ "Success": "False", "message": "Enter username" })

        if (!password)
            return res.status(404).json({ "Success": "False", "message": "Enter Password" })

        if (!user)
            return res.status(404).json({ "Success": "False", "message": "user not found" })

        bcrypt.compare(password, user.password, function (err, result) {
            if (!result)
                return res.status(404).json({ "Success": "False", "message": "incorrect password" });
            else {
                jwt.sign({ username: username }, privateKey, { algorithm: 'RS256' }, function (err, token) {
                    user.token = token;
                    user.save();
                    res.status(201).json({ "Success": "Logged in", "message": user })
                });
            }
        });
    }
    catch (err) {
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const logout = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        user.token = null;
        user.save();
        if (!user)
            return res.status(404).json({ "Success": "False", "message": "Failed to log out" })
        res.status(200).json({ "Success": "true", "message": "Log out successfully" })
    }
    catch (err) {
        return res.status(404).json({ "Success": "False", "message": err.message });
    }
}