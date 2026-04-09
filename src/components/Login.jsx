import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Login(){

const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const nav=useNavigate()

const submit=async(e)=>{
e.preventDefault()

const res=await axios.post("http://localhost:8080/login",{username,password})

if(res.data){
localStorage.setItem("user",username)
nav("/home")
}
}

return(
<form onSubmit={submit}>
<h2>Login</h2>

<input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />

<input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />

<button type="submit">Login</button>

</form>
)
}