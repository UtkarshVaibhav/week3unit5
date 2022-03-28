import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthContex';
import { Navigate } from 'react-router-dom';
export const Products = () => {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }
  return (
    <div>Products</div>
  )
}
