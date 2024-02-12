import { useState,useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setQuizzes } from './store/quizSlice'

export default function App() {

  const dispatch = useDispatch();

  const getQuizzes = () => {
    axios.get("http://localhost:5000/quiz")
      .then(res => dispatch(setQuizzes(res.data.message)))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getQuizzes()
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
