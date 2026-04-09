import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Register(){

const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const nav=useNavigate()

const submit=async(e)=>{
e.preventDefault()

await axios.post("http://localhost:8080/register",{username,password})

nav("/login")
}

return(
<form onSubmit={submit}>
<h2>Register</h2>

<input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />

<input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />

<button type="submit">Register</button>

</form>
)
}