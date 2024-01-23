import { ReturnDocument } from "mongodb";
import { Quiz } from "../models/quiz.js";

export const createQuiz = (req,res,next)=>{
    try{
        const quiz = new Quiz(req.body);
        quiz.id=quiz.title.toLowerCase().replace(/ /g,"-");
        quiz.save()
            .then(()=> res.status(201).json({"Success":"True","message":"Quiz created successfully",quiz}))
            .catch(err => res.status(404).json({ "Success": "False", "message": err.message }))
    } catch(err){
        res.status(404).json({ "Success": "False", "message": err })
    }
}

export const getQuiz= async (req,res,next)=>{
    try{
    const quiz = await Quiz.findOne({id:req.params.id});
    if(!quiz)
        return res.status(404).json({ "Success": "False", "message": err.message })
    res.status(200).json({ "Success": "True", "message": quiz })
    }catch(err){
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}

export const getAllQuiz= async (req,res,next)=>{
    try{
    const quizzes = await Quiz.find();
    if(!quizzes)
        return res.status(404).json({ "Success": "False", "message": err.message })
    res.status(200).json({ "Success": "True", "message": quizzes })
    }catch(err){
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}

export const updateQuiz= async (req,res,next)=>{
    try{
    const quiz = await Quiz.findOneAndUpdate({id:req.params.id},req.body,{returnDocument:"after"});
    if(!quiz)
        return res.status(404).json({ "Success": "False", "message": err.message })
    res.status(200).json({ "Success": "True", "message": "Quiz updated successfully",quiz })
    }catch(err){
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}

export const deleteQuiz= async (req,res,next)=>{
    try{
    const quiz = await Quiz.findOneAndDelete({id:req.params.id},{returnDocument:"after"});
    if(!quiz)
        return res.status(404).json({ "Success": "False", "message": err.message })
    res.status(200).json({ "Success": "True", "message": "Quiz deleted Successfully",quiz })
    }catch(err){
        res.status(404).json({ "Success": "False", "message": err.message })
    }
}