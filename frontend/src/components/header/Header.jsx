import React from 'react';
import logo from "./logo1.png"
import { Link } from 'react-router-dom';

export default function Header() {

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
                    <div className="cursor-pointer hover:text-white">Log In</div>
                    <div className="bg-gradient-to-r from-purple-500 to-[#123A99] text-white p-[0.2rem] px-2 cursor-pointer rounded-lg">Sign Up</div>
                </div>
            </nav>
        </>
    )
}