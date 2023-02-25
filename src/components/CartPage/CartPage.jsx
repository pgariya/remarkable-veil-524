import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./CartPage.css"
const CartPage = () => {
  return (
    <div className='cart-item'>
      <div className="cartitem-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtm-mcwqSUdHNQHgCM9RszAeX3t77A7OhqYSCPJemtw&usqp=CAU&ec=48600113" alt="" />
      </div>
      <Link to={'/product/:id'} className="cartitem-name">
        <p>product 1</p>
      </Link>
      <p className='cartitem-price'>
$499.50
      </p>
      <select name="" className='cartitem-select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button className='cartitem-deletebtn'>
      <AiFillDelete/>
      </button>
    </div>
  )
}

export default CartPage
