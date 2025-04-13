import React, { useState } from 'react'
import './Scss/Signup.scss'
import { Link } from 'react-router-dom'

function Signup() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")

  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [userError,setUserError] = useState("")
  const [passError,setPassError] = useState("")

  const handleSignup = (e)=>{
  e.preventDefault()

  let error= false;
  
  if(name.trim()=== ""){
    setNameError("Name is mandatory")
    error=true
  }
  else{
    setNameError("")
  }

  if(email.trim()=== ""){
    setEmailError("Email is required")
    error=true
  }
  else{
    setEmailError("")
  }

  if(userName.trim()=== ""){
    setUserError("Username is required")
    error=true
  }
  else{
    setUserError("")
    localStorage.setItem("Usernmae:", userName)
  }

  if(password.trim()===""){
    setPassError("Password is required")
    error=true
  }
  else{
    setPassError("")
    localStorage.setItem("Password:",password)
  }

  if(!error){
    alert("Signup Successfully")
    window.location.href="/Login"
  }
}
  return (
  <div className='signup'>
    <div className='signup-details'>
      <h1>Signup</h1>
      <form className='signup-input' onClick={handleSignup}>

        <input type='text' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>{nameError}</label>

        <input type='email' placeholder='E-mail'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>{emailError}</label>

        <input type='text' placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <label>{userError}</label>

        <input type='password' placeholder='Password'value={password} onChange ={(e)=>setPassword(e.target.value)}/>
        <label>{passError}</label>

        <button type='submit'>Continue</button>
      </form>
      <p>Already have an account?<Link to={"/login"}><span>Login here</span></Link></p>
    </div>
  </div>
  )
}

export default Signup