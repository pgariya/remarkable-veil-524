import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "./CartPage.css"
const CartPage = () => {
  return (
    <div className='cart-container'>
      <Text fontSize={'4xl'} fontWeight={'bold'} className="fancy">
        Here is your Shopping cart
      </Text>
    <Flex className='cart'>
    <Box className='cart-items'>
        {
            Cartdata.map((ele)=>{
                return (
                    <div className="items">
                        <div className="prod-img">
                            <img src={ele.img} alt={ele.name} />
                        </div>
                        <div className="prod-data">
                            <p className='bold'>{ele.name}</p>
                            <p>Product  description</p>
                            <p className='bold'>Size:{ele.size}</p>
                            <p className='bold'>Qantity:{ele.quantity}</p>
                            <p className='bold'>Price:{ele.price}</p>
                            <p className='bold'>Items Left:{ele.itemLeft}</p>

                        </div>
                    </div>
                )
            })
        }
    </Box>
    <Box className='total-cart'>

    </Box>
    </Flex>
    </div>
  )
}

export default CartPage


const Cartdata = [
    {
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoq0tC6TwHhz1iatGxD9HBiU4dVYRStmGNf9A1RMn3UTdbdnuq47y71Wp1mFozGy6b5XarNysIqQYXjthhKTOx-tx0TMoMffCaTQagp4OUrNVNZ7yP06GJTw&usqp=CAc",
        price:250,
        name:"denim shirt",
        size:"xl",
        quantity:1,
        itemLeft:4
    },
    {
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoq0tC6TwHhz1iatGxD9HBiU4dVYRStmGNf9A1RMn3UTdbdnuq47y71Wp1mFozGy6b5XarNysIqQYXjthhKTOx-tx0TMoMffCaTQagp4OUrNVNZ7yP06GJTw&usqp=CAc",
        price:250,
        name:"denim shirt",
        size:"xl",
        quantity:1,
        itemLeft:4
    },
    {
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoq0tC6TwHhz1iatGxD9HBiU4dVYRStmGNf9A1RMn3UTdbdnuq47y71Wp1mFozGy6b5XarNysIqQYXjthhKTOx-tx0TMoMffCaTQagp4OUrNVNZ7yP06GJTw&usqp=CAc",
        price:250,
        name:"denim shirt",
        size:"xl",
        quantity:1,
        itemLeft:4
    },
    {
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoq0tC6TwHhz1iatGxD9HBiU4dVYRStmGNf9A1RMn3UTdbdnuq47y71Wp1mFozGy6b5XarNysIqQYXjthhKTOx-tx0TMoMffCaTQagp4OUrNVNZ7yP06GJTw&usqp=CAc",
        price:250,
        name:"denim shirt",
        size:"xl",
        quantity:1,
        itemLeft:4
    },
]