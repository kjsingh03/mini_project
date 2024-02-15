import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { useSelector } from 'react-redux';

function Cards() {

  const quizzes = useSelector(state => state.quiz.quizzes)

  return (
    <div className="grid grid-cols-3 gap-[4rem] py-[2rem] w-[90%] xl:w-[80%] mt-10 mx-auto min-h-screen">
      {
        quizzes.map((quiz,index) => (
            <Card quiz={quiz} key={index} />
        ))
      }
    </div>
  )
}

export default Cards
