import React, { useState} from 'react'

function Loginform() 
{
  const[userName,setUserName]= useState('');
  const[password,setPassword]= useState('');

  const formHolder=(event)=>
  {
    event.preventDefault();
    const loginObj=
    {
        name:userName,
        pwd:password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
  }

  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHolder}>
    Username  :<input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
    Password  :<input type="Password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Loginform