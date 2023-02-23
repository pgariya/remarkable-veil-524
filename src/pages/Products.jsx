import { Box, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../constants/config'



const ProductPage = () => {
    let [productlist,setproductlist]= useState([])
    let [isError,setisError]= useState(false);

    const search = useLocation().search;
    const catg = new URLSearchParams(search).get('category');


    console.log(catg);

    let getdata=async() =>{

        try{
            let res= await axios.get(`${BASE_URL}/product?category=${catg}`)
            //?gender=female ya kuch bhi filter krna ha too
            
            setproductlist(res.data.data)
        }catch(err){
            setisError(true)
        }
    }

useEffect(()=>{
   getdata()
},[])


console.log(productlist)


  return (
    <Box>

{isError !== ""  && <h1>{isError}</h1>}


<SimpleGrid columns={{base:1, md:2 , lg:3}} gap={10} w="90%" m={"auto"}>

    {
        productlist.map((el) => <Stack key={el._id} p={6} textAlign="left" borderRadius={"10px"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">

            <Image src={ el.image.split(",")[0]} borderRadius={"10px"}/>
            <Heading>{el.title.charAt(0).toUpperCase()+ el.title.slice(1)} </Heading>
            <Text fontSize={"20px"} fontWeight="bold"> Price:  ₹ {el.price}</Text>
            <HStack display={"flex"}  justifyContent="center" gap={5} m="auto">
                {el.sizes.split(",").map((e) => <Box borderRadius={"5px"} border={"2px solid"}  px={2} bg={"grey"} color="white"> {e}</Box>)}
            </HStack>

        </Stack>)
    }
</SimpleGrid>




    </Box>
  )
}

export default ProductPage