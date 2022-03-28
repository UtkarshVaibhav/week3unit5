import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        "name": "",
        "email": "",
        "password": "",
        "username": "",
        "mobile": "",
        "description": "" 
      });
      const handleSubmit=(e)=>{
        e.preventDefault();
        setFormData({
            "name": "",
            "email": "",
            "password": "",
            "username": "",
            "mobile": "",
            "description": ""
        })
        fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "content-type":"application/json"
        }
    })        
    .then((res)=>console.log(res));
 }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
      }
      const {name,email,password,username,mobile,description}=formData;
  return (
  <>
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input name="name" type="text" placeholder='Enter Name' onChange={handleChange} value={name}/>
        <br />
        <input name="email" type="text" placeholder='Enter Email' onChange={handleChange} value={email}/>
        <br />
        <input name="password" type="password" placeholder='Enter password' onChange={handleChange} value={password}/>
        <br />
        <input name="username" type="text" placeholder='Enter Username' onChange={handleChange} value={username}/>
        <br />
        <input name="mobile" type="text" placeholder='Enter mobile number' onChange={handleChange} value={mobile}/>
        <br />
        <input name="description" type="text" placeholder='Enter Description' onChange={handleChange} value={description}/>
        <br />
        <input type="submit" value="submit"/>
    </form>
    <button onClick={()=>{navigate('/login')}}>Redirect to Login Page</button>
  </>
  )
}
