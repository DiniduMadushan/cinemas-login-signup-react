import React from 'react'
import '../signupForm/signupForm.css'
import { Link } from 'react-router-dom'

export default function SignupForm() {
  return (
    <div id="signupPageBody">
        <div class="wrapper">
    <form action="">
      <h1>Sign Up</h1>
      <div class="input-box">
        <input type="text" placeholder="Username" required/>
        <i class='bx bxs-user'></i>
      </div>
      
      <div class="input-box">
        <input type="email" placeholder="Email" required/>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="confirm Password" required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"/>Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register-link">
        <p>Already have an account? <Link to="/login">Login now</Link></p>
      </div>
    </form>
  </div>
    </div>
  )
}
