import mongoose, { Schema } from 'mongoose'

export const userSchema = new Schema({
    username: { type: String, required: [true, "Enter Username"], unique: [true, "Username already exists"] },
    password: { type: String, required: [true, "Enter password"], minLength: [8, "Password should be atleast 8 characters long"] },
    role: { type: String, default: "user" },
    token: { type: String },
    points: { type: Number, default:0}
})

export const User = mongoose.model("User", userSchema);