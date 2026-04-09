import React from "react"
import {Link,useNavigate} from "react-router-dom"

export default function Home(){

const nav=useNavigate()

const logout=()=>{
localStorage.removeItem("user")
nav("/login")
}

return(
<div>

<h2>Home</h2>

<Link to="/profile">Profile</Link>

<br/>

<button onClick={logout}>Logout</button>

</div>
)
}