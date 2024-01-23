import React from 'react';
import logo from "./logo.jpg"

export default function Header() {

    return (
        <>
            <nav className="flex sticky top-[2rem] px-[2rem] backdrop-blur-[10rem] bg-[#1a123d] justify-between items-center w-[70%] mx-auto my-[1.2rem] ">
                <div className="w-[25%]">
                <div className="w-[4rem] p-[.5rem]">
                    <img src={logo} className="rounded-[50%]" />
                </div>
                </div>
                <div className="flex justify-between items-center gap-[1.5rem] w-[40%]">
                    <div className="hover:text-[#ffffff] cursor-pointer">Home</div>
                    <div className="dropdown ">
                        <div className="dropBtn py-[1.2rem] flex items-center gap-[.2rem] hover:text-[#ffffff] cursor-pointer"><p>Level</p> <i className="text-[.8rem] fa-solid fa-plus"></i></div>
                        <div className="dropContent backdrop-blur-[2rem] bg-[#1a123d]  flex-col gap-[1rem] p-[1rem]">
                            <p>Web Development</p>
                            <p>App Development</p>
                            <p>Python for Kids</p>
                            <p>C for Kids</p>
                        </div>
                    </div>
                    <div className="hover:text-[#ffffff] cursor-pointer">Contacts</div>
                    <div className="hover:text-[#ffffff] cursor-pointer">Contacts</div>
                </div>
                <div className="flex justify-end gap-[1rem] w-[25%] items-center">
                    <div className="cursor-pointer hover:text-white">Log In</div>
                    <div className="text-[#1a123d] bg-white border-[0.05rem] border-transparent hover:bg-[#1a123d] hover:text-white border-white p-[0.2rem]">Sign Up</div>
                </div>
            </nav>
        </>
    )
}