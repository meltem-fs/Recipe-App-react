import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate("/home")
    }



  return (
    <div className="main">
      <div className="login">
        <h1>Welcome</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" required/>
          <input type="password" placeholder="password" required/>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
