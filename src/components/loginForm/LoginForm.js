import React from 'react'
import '../loginForm/Login.css'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    
<div id="loginPageBody">

<div class="wrapper">
    <form action="">
      <h1>Login</h1>
      <div class="input-box">
        <input type="email" placeholder="Email" required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"/>Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register-link">
        <p>Dont have an account? <Link to="/signup" >Register</Link></p>
      </div>
    </form>
  </div>

  </div>
    
  )
}
