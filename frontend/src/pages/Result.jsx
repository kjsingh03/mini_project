import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

function Result() {

    const [points, setPoints] = useState(0)
    const [total, setTotal] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    const userid = JSON.parse(localStorage.getItem('credentials'))?._id

    const activePoints = useSelector(state => state.quiz.activePoints)



    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="border-4 border-double border-yellow-200 rounded-[50%] w-max h-max flex justify-center items-center mt-[5rem] ">
                    <p className="text-4xl px-12 py-16"> {activePoints/25} / 4</p>
                </div>
                    <p>Quiz Summary</p>
                    <p>Wanna try again? <span className="underline cursor-pointer" onClick={()=>navigate(`/${id}`)} >click here</span></p>
                    <p>Go back to <span className="underline cursor-pointer" onClick={()=>navigate(`/`)} >Home</span></p>
                
            </div>
        </div>
    )
}

export default Result
