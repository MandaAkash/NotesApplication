import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate, Route, Routes } from 'react-router-dom'
// import './login.css'
// import Main from './Main';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const writeUser = () => {
        const form = {email , password};
        fetch("/login", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(form)
        }).then((response) => {
            console.log("response received")
            console.log(response.status);
            if (response.status === 200)
			{
                navigate('/')

			}
            else {
                alert("Invalid password")
            }

        });
    };
    return ( 
	<div className='text-center container'>
        <h1 className='mb-5'> Login </h1> 
		<input className = 'input-container'
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        type = "email"
        placeholder = "Email"/>
        <br />
        <input className = 'input-container'
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        type = "password"
        placeholder = "Password"/>
        <br/>
        <button className="btn btn-primary" onClick = { writeUser } > Login </button>
		</div>
		

    )
} 


export default Login