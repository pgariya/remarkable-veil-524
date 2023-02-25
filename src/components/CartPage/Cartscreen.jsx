import React, { useEffect, useState } from 'react'
import "./Cartscreen.css"
import CartPage from './CartPage'
import { Text } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../constants/config'
import { Loading } from '../Loading'
const Cartscreen = () => {

  const {token} = useSelector((state)=>state.authReducer)
  const [cart,setCart] = useState([])
  const [loading,setLoading] =useState(false)


  useEffect(()=>{


    let getCartData = async()=>{
      setLoading(true)
      let res = await axios({
        method:"get",
        url:BASE_URL+`/cart`,
        headers:{
          Authorization:token
        }
      })

      console.log(res)
      if(res.data.status==1){
        setCart(res.data.data)
        setLoading(false)

      }else{
        setLoading(false)
        console.log("something went wrong")
      }

    }

    getCartData()

  },[])


  if(loading) return <Loading />

  return (
    <div style={{marginTop:"200px"}} className='cartscreen'>
      <div className="cartscreen_left">
        <Text fontSize={'3xl'} fontWeight='bold'>
            Shopping Cart
        </Text>
       {cart?.map((el)=><CartPage {...el}/>)}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
            <p>subtotal(0) items</p>
            <p>$499.50</p>
            <button>Proceed to Checkout</button>
        </div>
       
      </div>
    </div>
  )
}

export default Cartscreen
