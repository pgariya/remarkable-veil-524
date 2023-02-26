import { Box, Button, Flex, HStack, Input, Select } from '@chakra-ui/react'
import React from 'react'
import social from "../../../assets/social.jpeg"
import "./Footer.css"
import {AiFillGooglePlusCircle,AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {TfiYoutube} from "react-icons/tfi"
import {BsPinterest} from "react-icons/bs"
import {ImInstagram} from "react-icons/im"
import { AUTO, CENTER, COLUMN, NONE, ROW, SB, START } from '../../../constants/typography'
const Footer = () => {
  return (
    <div className='footer-container'>
        <p style={{textAlign:"left",fontWeight:"bold",marginLeft:"5px"}}>Sign up for our newsletter</p>
        <Flex gap={4} justifyContent={SB} direction={{base:COLUMN,sm:COLUMN,md:COLUMN,lg:ROW}} >
        <Flex alignItems={CENTER}>
      <Input className='input-field' w={"30rem"} mt={3} ml={1}
    isInvalid
    errorBorderColor='orange.400'
    focusBorderColor='black'
    placeholder='Email'
  />
  <Select placeholder='gender'  w={40} mt={3} ml={3}>
  
  <option value='male'>Male</option>
  <option value='female'>Female</option>
</Select>
  <Button background={'orange.400'} mt={3} ml={3} color='white'>SUBMIT</Button>
        </Flex>
    <Flex className='social' fontSize={"25px"} gap={2} justifyContent={CENTER} >
    <p><AiFillGooglePlusCircle/></p>
    <p><BsFacebook/></p>
    <p><TfiYoutube/></p>
    <p><AiFillTwitterCircle/></p>
    <p><BsPinterest/></p>
    <p><ImInstagram/></p>
  </Flex>
      </Flex>

      <Flex  direction={{base:COLUMN,sm:COLUMN,md:COLUMN,lg:ROW}} justifyContent={SB} >

        <Flex padding={2} gap={50} mt={4}  direction={{base:COLUMN,sm:COLUMN,md:COLUMN,lg:ROW}} justifyContent={SB} >

        <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"bold"}}>Yepme #freshfashion</li>
            <li>Insolvency Proceedings</li>
            <li>In the Press</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            
        </ul>

        <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"bold"}}>Help</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>return</li>
            <li>Add Complaint</li>
            <li>Order Status</li>
            
        </ul>


        <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"bold"}}>Account</li>
            <li>My Account</li>
            <li>New Registration</li>
            <li>Forgot Password</li>
            
            
        </ul>
        </Flex>

        <Box margin={{base:AUTO,sm:AUTO,md:AUTO,lg:0}}  >
            <img src={social} alt="" />
        </Box>
      </Flex>


{/* bottom part of footer */}


    <Box className="bottom">
      <Box m={2}>
      <p>MEN: Shirts / T-shirts / Ethnic Wear / Jeans / Winter Wear / Sports Shoes / Watches / Sherwanis / Kurtas / Pyjamas / Polos / Sandals / Tracksuits / Shorts / Party Wear</p> <br />
        <p>WOMEN: Tops / Dresses / Footwear / Shirts / Jeans / Kurtis / Skirts / Pants / Salwar Kameez / Sarees / Salwar & Churidars / Watches / Lingerie / Lehengas / Jewellery / Jumpsuits / Party Wear</p><br />
        <p>Most Searches On Yepme: Fresh Fashion Sale / Yepme Offers</p><br />
        <p>Online Shopping - Fashion & Lifestyle Store for Men & Women</p><br />
        <p>Welcome to the world of crazy shoppers! Push your shopaholic boat out into the extreme ocean of fashion in just few clicks. Quench your fashion thirst by diving through the one stop solution in online shopping in India here at Yepme. With the desire to serve the fashionable you, Yepme has come up with its own fashion brand, putting across endless sections for men & women with massive collection in apropos to latest trends and styles.</p><br />
        <p>Yepme.com: India’s First Online Fashion Shopping Brand</p><br />
        <p>Filtering the latest trends, prospects never seem to end when you are shopping with Yepme. Our new graphical user interface helps customers in surfing their desired products with ease. Keep finding a new you throughout our website, round the clock. Best ever combos, reasonable price, wide product range & durable quality; a promise that Yepme as a brand has made to its customers. Yepme has engrossed itself on making online shopping much easier and enjoyable with its extensive product range starting from the western range of tops, shoes, watches, accessories to the ethnic edge of sarees and jewellery in women fashion. Also, the uber cool additions to men shirts, T-shirts, bottoms, footwear & accessories in men’s fashion has helped us in drawing a larger platform for men throughout the country. We also endeavour on providing back to back irresistible offers and reasonably priced products on Yepme.com to make online shopping rich & prolific.</p><br />
        <p>Our shopaholic mantra for customers is accompanied by our ethics of never compromising on the quality and delivering value based expectations. With a customer- friendly approach, Yepme endeavors to deliver your products within the shortest possible time, and with a surety that you will love what you choose. In case, you are interested in any alternate product from our website, a focussed team is there to render you help when you are showing your passion to exceed in online shopping. Fashion ideas are shared through our lookbooks on website just to match the expectation of yours with what we have designed it for. Our fashion blog has always tried to keep you updated with the most desirable pair ups and the latest in trends.</p><br />
        

      </Box>
      
        <Box className="black-footer">
        © 2016 www.yepme.com All rights reserved. Powered by Omni enabler.
        </Box>
    </Box>


    </div>
  )
}

export default Footer
