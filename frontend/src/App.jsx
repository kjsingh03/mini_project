import { useState,useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  
  // useEffect(()=>{
  //       axios.get("http://localhost:5000/users")
  //             .then(res=> console.log(res.data.message))
  //             .catch(err => console.log(err))
  // },[])

  return (
    <>
      <Outlet />
    </>
  )
}
