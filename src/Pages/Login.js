import React, { useState } from 'react'
import './Scss/Login.scss'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [userError,setUserError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  let storedusername = localStorage.getItem("Username")
  let storedpassword = localStorage.getItem("Password")

  const handleLogin = (e)=>{
    e.preventDefault()
    let error = false;

    if(userName.trim()===""){
      setUserError("Please enter a username")
      error = true;
    }
    else if(storedusername !== userName){
      setUserError("Username is wrong")
      toast.error("Username is wrong")
      error=true
    }
    else{
    setUserError("")
    }

    if(password.trim()===""){
      setPasswordError("Please enter a password")
      error = true;
    } 
    // else if(password.trim().length<=6){
    //   setPasswordError("Password should contain six letters")
    //   error = true
    // }
    else if(storedpassword !== password){
      setPasswordError("Password is wrong")
      toast.error("Password is wrong")
      error=true
    }
    else{
      setPasswordError("")
    }

    if(storedusername === userName && storedpassword === password && !error){
      alert("Login Successfull!")
      toast.success("Validation Success")
      window.location.href='/shop'
    }
    // else{
    //  alert("Invalid Details")
    // }

    // if(!error){
    //   window.location.href='/shop'
      
    // }
  }
    
  return (
    <div className='login'>
     <div className='login-details'>
         <h1>Login</h1>

        <form className='login-input' onClick={handleLogin}>
           <input type='text' placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
           <label>{userError}</label>
           <input type='password' placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <label>{passwordError}</label>
           <button type='submit'>Login</button>
        </form>
        
        <p>If you not having a account?<Link to={"/signup"}><span>Signup here</span></Link></p>  
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login