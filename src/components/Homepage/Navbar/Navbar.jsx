import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/logo.png"
import { POINTER } from '../../../constants/typography'
import { LOGOUT } from '../../../Redux/auth/auth.type'

import Menu1 from './Menu'

import "./Navbar.css"
const Navbar = () => {
    const nav = useNavigate()
    const {isAuth} = useSelector((state)=>state.authReducer)
    const dispatch = useDispatch()
  return (
    <div className='nav-container'>
      <Box className='topmost-nav'>
        <p>WELCOME GUEST</p>
        <p>DOWNLOAD APP</p>
        <p>CONTACT US</p>
        <p  onClick={()=>{
            if(!isAuth){
                nav("/login")
            }else{
                sessionStorage.removeItem("token")
                sessionStorage.removeItem("isAuth")
                dispatch({type:LOGOUT})
            }
        }}>{isAuth?"LOGOUT":"LOGIN"}</p>
        <p>LOGIN WITH FACEBOOK</p>
      </Box>
      <div className="hl"></div>
      <Box className="nav-logo">
        <div className='logo'>
        <img style={{cursor:POINTER}} onClick={()=>{
          nav("/")
        }} src={logo} alt="styluxe" />
        </div>
        <Input className='input-field' w={"30rem"} mt={3} ml={40}
    isInvalid
    errorBorderColor='orange.400'
    focusBorderColor='black'
    placeholder='search for FRESH FASHION!'
  />
  <Button background={'orange.400'} mt={3} ml={3} color='white'>Search</Button>

  <Flex>
  
  <img className='store-img' src="http://staticawsy.yepme.com/images/own-yepme-store-btn.png" alt="" />
  <Box className='cart-gift' fontWeight={'bold'}>
   <p>Cart(0)</p> 
   <p>Loyalty Points</p>
  </Box>
  </Flex>
    </Box>

    <Box className='black-nav'>
        <Menu1 gen = "MEN"/>
        <Menu1 gen = "WOMEN"/>
    </Box>
  </div>
  )
}

export default Navbar
