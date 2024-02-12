import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    "quizzes":[],
    "quiz":{},
    "points":0,
    "activePoints":0
}

export const quizSice = createSlice({
    name:"Quiz",
    initialState,
    reducers:{
        setQuizzes:(state,action)=>{
            state.quizzes = action.payload
        },
        setQuiz : (state,action)=>{
            state.quiz = action.payload
        },
        setPoints : (state,action)=>{
            state.points = action.payload
        },
        setActivePoints:(state,action)=>{
            state.activePoints = action.payload
        }
    }
})

export const { setPoints,setQuiz,setQuizzes,setActivePoints} = quizSice.actions;

export default quizSice.reducer