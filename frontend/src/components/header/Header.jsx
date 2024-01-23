import React from 'react';
import logo from "./logo.jpg"

export default function Header() {

    return (
        <>
            <nav className="flex sticky top-[2rem] px-[2rem] backdrop-blur-[10rem] bg-white/10 justify-between items-center w-[70%] mx-auto my-[1.2rem] ">
                <div className="flex justify-start items-center gap-[3rem] w-[33%]">
                    <div>Quizzes</div>
                    <div className="dropdown">
                        <div className="dropBtn py-[1.2rem] flex items-center gap-[.2rem]"><p>Play Zone</p> <i className="text-[.8rem] fa-solid fa-plus"></i></div>
                        <div className="dropContent backdrop-blur-[2rem] bg-white/10  flex-col gap-[1rem] p-[1rem]">
                            <p>Web Development</p>
                            <p>App Development</p>
                            <p>Python for Kids</p>
                            <p>C for Kids</p>
                        </div>
                    </div>
                </div>
                <div className="w-[4rem] p-[.5rem]">
                    <img src={logo} className="w-full h-full object-cover rounded-[50%]" />
                </div>
                <div className="flex justify-end gap-[3rem] w-[33%]">
                    <div>Log In</div>
                    <div>Sign Up</div>
                </div>
            </nav>
        </>
    )
}