import React from 'react'
import "./Cartscreen.css"
import CartPage from './CartPage'
import { Text } from '@chakra-ui/react'
const Cartscreen = () => {
  return (
    <div className='cartscreen'>
      <div className="cartscreen_left">
        <Text fontSize={'3xl'} fontWeight='bold'>
            Shopping Cart
        </Text>
        <CartPage />
        <CartPage />
        <CartPage />
        <CartPage />
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
