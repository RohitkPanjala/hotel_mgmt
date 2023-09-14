import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginComponent() {
  const nav = useNavigate();
  const [uname, setUname] = useState('');
  const [upass, setUpass] = useState('');

  const setUser = (e) =>{
    setUname(e.target.value);
  }

  const setPass = (e)=>{
    setUpass(e.target.value);
  }

  const handleLogin = () => {
 if(uname ===""||upass===""){
  alert("Enter Username and Password");
 }
 else if(uname==="user" && upass==="password123"){
nav("/src/home.js");
 }
else{
  alert("Enter Correct Details");
}
  }

  return (
    <div>
      <h1>LoginComponent</h1>
      <div className="login-sec"> 
    <form onSubmit={handleLogin}>
      <section>
<label>Enter UserName</label><input type="text" onChange={setUser} placeholder="Enter User Name"/>
      </section><br/>
      <section>
<label>Enter Password</label><input type="password" onChange={setPass} placeholder="Enter Password"/>
      </section>
<button>Login</button>
    </form>
      </div>
    </div>   
  )
}

export default LoginComponent;