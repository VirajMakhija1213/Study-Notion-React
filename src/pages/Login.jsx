import React from 'react'
import loginImg from "../assets/login.png"
import Template from '../components/Template'
export default function Login({setIsLoggedIn}) {
  return (
    <div>
        <Template
        title="Welcome Back"
        desc1="Build Skills for today,tommorrow and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
