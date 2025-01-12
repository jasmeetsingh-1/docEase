import React from "react";
import { useNavigate } from "react-router-dom";


function HomePage(){
    const navigate = useNavigate();
    return <div>
        <h1>Welcome to DocEase </h1>
        <button onClick={()=>{
            navigate("/login")
        }}>Login</button>
    </div>
}

export default HomePage;