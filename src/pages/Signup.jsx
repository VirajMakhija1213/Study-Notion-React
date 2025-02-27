import React from 'react'
import signUpImg from "../assets/signup.png"
import Template from '../components/Template'
export default function Signup({setIsLoggedIn}) {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build Skills for today,tommorrow and beyond."
        desc2="Education to future-proof your career."
        image={signUpImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
