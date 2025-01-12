import React from "react";
import { useNavigate } from "react-router-dom";


function LoginPage(){
    const navigate = useNavigate();
    return <div>
        <h1>Login to DocEase</h1>
        <button onClick={()=>{
            navigate("/");
        }}>Login</button>
    </div>
}

export default LoginPage;