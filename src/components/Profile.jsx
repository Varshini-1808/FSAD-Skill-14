import React,{useEffect,useState} from "react"
import axios from "axios"

export default function Profile(){

const [user,setUser]=useState(null)

const username=localStorage.getItem("user")

useEffect(()=>{
axios.get("http://localhost:8080/user/"+username)
.then(res=>setUser(res.data))
},[username])

if(!user) return <div>Loading...</div>

return(
<div>

<h2>Profile</h2>

<p>Username: {user.username}</p>

</div>
)
}