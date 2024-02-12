import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUsername } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [form, setForm] = useState({
        password: "",
        username: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/auth/signup",form,{
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>{
            console.log(res.data.Success)
            localStorage.setItem("credentials",JSON.stringify(res.data.message))
            navigate('/')
        })
        .catch(err => console.log(err.response.data.message?.split(":")[2]?.split(",")[0] || err.response.data.message))
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="wrapper ">
                <div className="title">
                    Signup Form
                </div>
                <form method="Post" onSubmit={handleSubmit} >
                    <div className="field">
                        <input type="text" onChange={handleChange} name="username" />
                        <label>Username</label>
                    </div>
                    <div className="field">
                        <input type="password" onChange={handleChange} name="password" />
                        <label>Password</label>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Signup" />
                    </div>
                    <div className="signup-link">
                        Already a member? <span onClick={() => {navigate('/login')}} className="text-[#4158d0] underline cursor-pointer">Login now</span>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup