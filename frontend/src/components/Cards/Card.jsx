import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Card({ quiz }) {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/${quiz.id}`)
    }

    return (
        <div className="w-full bg-white h-max rounded-xl overflow-hidden text-black">
            <div className="w-full h-[12rem] overflow-hidden">
                <img src={quiz.thumbnail} className="w-full h-full object-fill" />
            </div>
            <div className="flex flex-col gap-[.4rem] p-[1rem]">
                <p className="w-full text-center font-bold text-[2rem]">{quiz.topic}</p>
                <p className="">Grade : {quiz.startGrade}-{quiz.endGrade}</p>
                <p className="">Level : {quiz.level}</p>
                <p className='w-full text-center'>
                    <button className="bg-pink-700 w-max py-2 px-3 cursor-pointer text-white rounded-xl" onClick={handleClick}>Play</button>
                </p>
            </div>
        </div>
    )
}