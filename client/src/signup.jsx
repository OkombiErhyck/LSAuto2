import React from "react";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Signup(){
  const navigate = useNavigate(); // Instantiate useNavigate hook
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  async function registerUser(ev) {
    ev.preventDefault();
    try{
      await axios.post("/register", {
        name,
        email,
        password,
      });     
      
      alert("Registration successful. Now you can log in");
      
      navigate("/login"); // Navigate to login page
      
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return(
    <>
      <div className="loginbox">
        <div className="logincontent">
          <h2>Bine ai <span>venit</span>!</h2>
          <form onSubmit={registerUser}>
            <br></br>
            <input type="text" placeholder="nume utilizator" value={name} onChange={ev => setName(ev.target.value)}/>
            <br></br><br></br>
            <input type="email" placeholder="bun@exemplu.com"  value={email} onChange={ev => setEmail(ev.target.value)}/>
            <br></br><br></br>
            <input type="password" placeholder="parola"  value={password} onChange={ev => setPassword(ev.target.value)}/>
            <br></br> 
            <button  className="loginbtn">Register<span></span></button>
          </form>   
        </div>    
      </div>
    </>
  );
};

export default Signup;
