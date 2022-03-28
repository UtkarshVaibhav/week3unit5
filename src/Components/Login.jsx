import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContex';

export const Login = () => {
    const {isAuth,login}=useContext(AuthContext);
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        "password": "",
        "username": "",
      });
      const handleSubmit=(e)=>{
        e.preventDefault();
        setFormData({
            "password": "",
            "username": "",
        })
        fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "content-type":"application/json"
        }
    })        
    .then(()=>{
        login();
        navigate('/');
    });
      }
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
      }
      const {password,username}=formData;
      if(isAuth)
      {
          return (<h1>Already logged in</h1>)
      }
  return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input name="username" type="text" placeholder='Enter Username' onChange={handleChange} value={username}/>
            <br />
            <input name="password" type="password" placeholder='Enter password' onChange={handleChange} value={password}/>
            <br />
            <input type="submit" value="submit"/>
        </form>
  )
}
