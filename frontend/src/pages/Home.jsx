import React, { useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import Header from '../components/header/Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate= useNavigate();

  const token = JSON.parse(localStorage.getItem('credentials'))?.token

  console.log(token)

  useEffect(()=>{
    if(!token){
      setTimeout(()=>{
        navigate('/login')
      },800)
    } 
  })

  return (
    <div className="min-h-screen">
      <Header />
      <Cards />
    </div>
  )
}

export default Home
