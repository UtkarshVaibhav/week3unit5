import React,{useContext} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {LogoutButton} from './LogoutButton'
import { AuthContext } from '../contexts/AuthContex';
const NavWrapper=styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
    background-color: aqua;
    padding: 2%;
    width: 100vw;
    `
    const StyledLink=styled(Link)`
    padding: 5px;
    text-decoration:none;
    &:hover{
        cursor:pointer;
        text-decoration: underline overline;
    }
    `
export const Navbar = () => {
    const {isAuth}=useContext(AuthContext);
    
  return (
    <NavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        {isAuth&&<LogoutButton/>}
    </NavWrapper>
  )
}
