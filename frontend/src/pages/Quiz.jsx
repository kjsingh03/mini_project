import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Quiz() {

    const { id } = useParams()

    const [questions, setQuestions] = useState([])
    const [activeQues, setActiveQues] = useState({})
    const [activeIndex, setActiveIndex] = useState(0);

    const getQuiz = async () => {
        let res = await axios.get(`http://localhost:5000/quiz/${id}`)
        setQuestions(res.data.message.questions)
        setActiveQues(res.data.message.questions[activeIndex])
    }

    console.log()

    const next = (e) => {
        e.preventDefault()
        if (activeIndex < 3) {
            setActiveQues(questions[activeIndex + 1]);
            setActiveIndex(prev => prev + 1);
            document.querySelector(".option.active").classList.remove("active")
        }
    }

    const prev = (e) => {
        e.preventDefault()
        if (activeIndex > 0) {
            setActiveQues(questions[activeIndex - 1]);
            setActiveIndex(prev => prev - 1);
            document.querySelector(".option.active").classList.remove("active")
        }
    }

    const ActiveOption = (id) =>{
        if(document.querySelector(".option.active"))
            document.querySelector(".option.active").classList.remove("active")
        document.getElementById(`${id}`).classList.add("active")
    }

    useEffect(() => {
        getQuiz()
    }, [activeIndex])

    return (
        <div className="flex flex-col gap-4 h-screen items-center w-[90%] mx-auto my-12">
            <div className="bg-[var(--accent-color)] w-full p-8 rounded-xl">
                <p className='flex items-center gap-6 text-2xl'><span className="text-6xl">Q </span> {activeQues.question}</p>
            </div>
            <div className="grid grid-cols-2 gap-16 w-full p-8">
                {
                    activeQues.options?.map((option,index) => (
                        <div key={index} onClick={()=>ActiveOption(option._id)} id={option._id} className="option bg-[var(--accent-color)] cursor-pointer text-lg p-4 flex items-center justify-between gap-4 rounded-xl">
                            <p className="bg-[var(--accent-sec-color)] text-2xl py-4 px-6 rounded-xl" >{index}</p>
                            <p className="w-full ">{option.option}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex w-full items-center justify-between mt-8">
                <i onClick={prev} className="bg-[var(--accent-color)] border-2 border-white py-4 px-5 cursor-pointer rounded-[50%] text-white fa-solid fa-chevron-left"></i>
                <i onClick={next} className="bg-[var(--accent-color)] border-2 border-white py-4 px-5 cursor-pointer rounded-[50%] text-white fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default Quiz
