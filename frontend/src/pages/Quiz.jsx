import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Quiz() {

    const { id } = useParams()

    const [quiz, setQuiz] = useState({});
    const [questions, setQuestions] = useState([])
    const [activeQues, setActiveQues] = useState({})
    const [options, setOptions] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);

    const getQuiz = async () => {
        let res = await axios.get(`http://localhost:5000/quiz/${id}`)
        setQuiz(res.data.message)
        setQuestions(res.data.message.questions)
        setActiveQues(res.data.message.questions[activeIndex])
        setOptions(res.data.message.questions[activeIndex].options)
    }

    // console.log(options)

    const handleClick = (e) => {
        e.preventDefault()
        if (activeIndex < 3) {
            setActiveQues(questions[activeIndex+1])
            setOptions(questions[activeIndex+1].options)
            setActiveIndex(prev => prev + 1)
        }
    }
    console.log(activeIndex)

    useEffect(() => {
        getQuiz()
    }, [])

    return (
        <div className="p-12 flex flex-col gap-5 min-h-screen">
            <h1 className="text-5xl">{quiz.topic}</h1>
            <h6 className="text-xl">{activeQues.question}</h6>
            <div className="p-2 border border-white">
                {
                    options?.map((option, index) => (
                        <p key={index}>{index + 1} : {option.option}</p>

                    ))
                }
            </div>
            <div className="w-full text-right">
                <button className="border border-white p-2 cursor-pointer" onClick={handleClick}>Next <i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Quiz
