import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContex'

export const LogoutButton = () => {
    const {logout}= useContext(AuthContext)
    const navigate=useNavigate();
  return (
    <button onClick={()=>{
        logout();
        navigate('/')
    }}>Logout</button>
  )
}
