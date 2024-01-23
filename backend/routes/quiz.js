import { Router } from "express";
import { getQuiz,createQuiz, getAllQuiz, updateQuiz, deleteQuiz } from "../controllers/quiz.js";

const quizRouter = Router();

quizRouter
    .post("/",createQuiz)
    .get("/:id",getQuiz)
    .get("/",getAllQuiz)
    .put("/:id",updateQuiz)
    .delete("/:id",deleteQuiz)

export default quizRouter