import mongoose, { Schema } from 'mongoose'
import validator from 'validator'

export const userSchema = new Schema({
    name: { type: String, required: [true,"Enter your name"] ,minLength: [4, "Name should have more than 4 characters"], maxLength: [30, "Name cannot exceed more than 30 characters"] },
    email:{type:String,required:[true,"Enter Email"],unique:[true,"Email already exists"],validate:[validator.isEmail,"Please enter a valid Email"]},
    password:{type:String,required:[true,"Enter password"], minLength:[8,"Password should be atleaset 8 characters long"]},
    role:{type:String,default:"user"},
    token:{type:String}
})

export const User = mongoose.model("User",userSchema);