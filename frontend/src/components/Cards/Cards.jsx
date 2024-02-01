import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';

function Cards() {

  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = () => {
    axios.get("http://localhost:5000/quiz")
      .then(res => setQuizzes(res.data.message))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getQuizzes()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-[4rem] py-[2rem] w-[90%] xl:w-[80%] mx-auto min-h-screen">
      {
        quizzes.map((quiz,index) => (
            <Card quiz={quiz} key={index} />
        ))
      }
    </div>
  )
}

export default Cards
