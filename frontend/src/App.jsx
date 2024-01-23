import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import axios from 'axios'

export default function App() {
  
  const [quizzes,setQuizzes] = useState([]);

  useEffect(()=>{
        axios.get("http://localhost:5000/users")
              .then(res=> console.log(res.data.message))
              .catch(err => console.log(err))
  },[])

  return (
    <>
      <Header />
      <div className="min-h-screen"></div>
    </>
  )
}
