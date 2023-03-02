import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/config'
import { RUPEES_SYMBOL } from '../../constants/constants'
import "./CartPage.css"
const CartPage = ({image,
  _id,
  title,
  description,
  price,
  originalPrice,
  sizes,
  setRefresh,
  category,
  style,
  color,
  material,
  fit,
  occasion,
  sleeves,
  neck,
  brand,
  gender,
  delivery,
  tags,
  stock,quantity,user,adminId}) => {

    const [qty,setQty] = useState(quantity)
    const {token} = useSelector((state)=>state.authReducer)

    const toast = useToast()
    const handQuantity=async(e)=>{
    
      let res = await axios({
        method:"patch",
        data:{quantity:Number(e.target.value)},
        url:BASE_URL+`/cart/${_id}`,
        headers:{
          Authorization:token
        }
      })

      if(res.data.status==1){
        setRefresh((prev)=>!prev)
      }else{

      }
    



    }


  return (
    <div className='cart-item'>
      <div className="cartitem-image">
        <img src={image.split(",")[0]} alt="" />
      </div>
      <Link to={'/product/:id'} className="cartitem-name">
        <p>{title}</p>
      </Link>
      <p className='cartitem-price'>
{RUPEES_SYMBOL+" " +price}
      </p>
      <select value={qty||1}   className='cartitem-select' onChange={handQuantity}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button onClick={async()=>{
        let res = await axios({
          method:"delete",
          url:BASE_URL+`/cart/${_id}`,
          headers:{
            Authorization:token
          }
        })

        if(res.data.status==1){
          setRefresh((prev)=>!prev)
        }else{
          toast({
            title: `Error`,
            description: res.data.message,
            status: 'error',
            duration: 2000,
            isClosable: true,
          })

        }

      }} className='cartitem-deletebtn'>
      <AiFillDelete/>
      </button>
    </div>
  )
}

export default CartPage
