import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Home from "./components/Home.jsx"
import Profile from "./components/Profile.jsx"

function App(){
  return(
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/login"/>} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </Router>
  )
}

export default App