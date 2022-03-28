import React,{useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContex'
export const Home = () => {
    const {isAuth}=useContext(AuthContext);
    // const [user,setUser]=useState([]);
    // useEffect(()=>{
    //     getUser();
    // },[])
    // const getUser=()=>{
    //     fetch('https://masai-api-mocker.herokuapp.com/user/masai-school')
    //     .then((res)=>res.json())
    //     .then((res)=>setUser(res));
    // }
    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }
  return (
    // <ul>
    //     {
    //         user.map((elm)=>{
    //             return <li key={elm.id}>{elm.name}</li>
    //         })
    //     }
    // </ul>
    <div>HOME</div>
  )
}
