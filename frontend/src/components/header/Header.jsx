import React, { useEffect, useState } from 'react';
import logo from "./logo1.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

    const navigate = useNavigate();
    const [total,setTotal] = useState(0)

    const user = JSON.parse(localStorage.getItem("credentials"))?.username ;
    const userid = JSON.parse(localStorage.getItem("credentials"))?._id ;

    useEffect(()=>{
            axios.get(`http://localhost:5000/users/${userid}`)
            .then(res=>{
                const points =res.data.message.points;
                let newPoints = 0;
                points.forEach(quiz=>{
                    newPoints+=quiz.point
                })

                setTotal(newPoints)
                
            })
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/auth/logout",{
            username:user
        },{
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>{
            console.log(res.data.message)
                localStorage.removeItem('credentials')
                navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <nav className="flex sticky top-[2rem] px-[2rem] backdrop-blur-[10rem] bg-[#1F1256] justify-between items-center w-[90%] rounded-[2rem] mx-auto my-[1.2rem] ">
                <div className="w-[25%]">
                <div className="w-[4rem] p-[.5rem]">
                    <img src={logo} className="rounded-[50%]" />
                </div>
                </div>
                <div className="flex justify-between items-center gap-[1.5rem] w-[40%]">
                    <div className="hover:text-[#ffffff] cursor-pointer">Home</div>
                    <div className="dropdown ">
                        <div className="dropBtn py-[1.2rem] flex items-center gap-[.2rem] hover:text-[#ffffff] cursor-pointer"><p>Quizzes</p> <i className="text-[.8rem] fa-solid fa-plus"></i></div>
                        <div className="dropContent backdrop-blur-[2rem] bg-[#1a123d]  flex-col gap-[1rem] p-[1rem]">
                            <Link to={'/web-development'}>Web Development</Link>
                            <Link to={'/'}>App Development</Link>
                            <Link to={'/intro-to-python'}>Python for Kids</Link>
                            <Link to={'/basic-of-c'}>C for Kids</Link>
                        </div>
                    </div>
                    <div className="hover:text-[#ffffff] cursor-pointer">Level</div>
                    <div className="hover:text-[#ffffff] cursor-pointer">Contacts</div>
                </div>
                <div className="flex justify-end gap-[1rem] w-[25%] items-center">
                    <div className="flex gap-2 items-center">
                        <p>⭐</p>
                        <p className="text-xs">{total}</p>
                    </div>
                    <div onClick={handleSubmit} className="bg-gradient-to-r from-purple-500 to-[#123A99] text-white p-[0.2rem] px-2 cursor-pointer rounded-lg">Sign Out</div>
                </div>
            </nav>
        </>
    )
}