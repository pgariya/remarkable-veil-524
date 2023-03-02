import { Grid, Image, Input, Text, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {FaAngleDown} from "react-icons/fa"

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from "@chakra-ui/react";
import { FILL_PARENT, ORANGE, R1, R2, R3 } from "../../../constants/typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";
import { useSelector } from "react-redux";


export default function ProductItem({setRefresh,
    _id,
    image,
    title,
    description,
    price,
    originalPrice,
    sizes,
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
    adminId,
    tags,
    stock}){
        const {token} = useSelector((state)=>state.authReducer)
        const toast = useToast()
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [loading,setLoading] = useState(false)
        const [product,setProduct] = useState({
            _id,
            title,
            image,
            description,
            price,
            originalPrice,
            sizes,
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
            adminId,
            tags,
            stock

        })

        const [images,setImages] =useState({})

        useEffect(()=>{

            image.split(",").map((el,i)=>{
                setImages((prev)=>{
                    return {...prev,["image"+i]:el}
                })
            })

        },[])



        const handleInput =(e)=>{

            let text = e.target.value
    
            setProduct((prev)=>{
                return {...prev,[e.target.name]:text}
            })
        }

        const handleImage =(e)=>{

            let text = e.target.value
    
            setImages((prev)=>{
                return {...prev,[e.target.name]:text}
            })
        }

    return <Tr>
    <Td><Image w={"40px"} src = {image?.split(",")[0]}></Image></Td>
    <Td maxW={"100px"} overflow={"hidden"} isTruncated>{title}</Td>
    <Td isNumeric>{price}</Td>
    <Td isNumeric>{originalPrice}</Td>
    <Td isNumeric>{stock}</Td>
    <Td>
    <Menu colorScheme={ORANGE} w={FILL_PARENT}>
            <MenuButton  w={FILL_PARENT} as={Button} rightIcon={<FaAngleDown />}>
              Edit
            </MenuButton>
            <MenuList>
             <MenuItem>
             <>
      <Text w={FILL_PARENT} onClick={onOpen}>Edit Product</Text>

      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Grid p={4} gap={2} gridTemplateColumns={{lg:R3,sm:R2,base:R1}}>
            {image.split(",").map((el,i)=><VStack key={i}>
                <Text>Images Links {i+1}</Text>
                <Input  value={images["image"+i]} placeholder="Image Links separated by comma (,) required" name={"image"+i} onChange={handleImage} border={"1px solid orange"} color="orange"></Input>
            </VStack>)}

            <VStack>
                <Text>Product title</Text>
                <Input value={product.title} placeholder="Product Title required" name="title" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>

            <VStack>
                <Text>Product Description</Text>
                <Input value={product.description} placeholder="Product Description required" name="description" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>

            <VStack>
                <Text>Product Price</Text>
                <Input value={product.price} placeholder="Product Price required" name="price" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>

            <VStack>
                <Text>Product Sizes</Text>
                <Input value={product.sizes} placeholder="sizes separated by comma (,) required" name="sizes" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>

            <VStack>
                <Text>Product Category</Text>
                <Input value={product.category} placeholder="category required" name="category" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>

            <VStack>
                <Text>Product Style</Text>
                <Input value={product.style} placeholder="style required" name="style" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>

            <VStack>
                <Text>Product Material</Text>
                <Input value={product.material} placeholder="material (optinal)" name="material" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>


            <VStack>
                <Text>Product Color</Text>
                <Input value={product.color} placeholder="color required" name="color" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>


            <VStack>
                <Text>Product Fit</Text>
                <Input value={product.fit} placeholder="fit (optional)" name="fit" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>


            <VStack>
                <Text>Product Occasion</Text>
                <Input value={product.occasion} placeholder="occasion (optional)" name="occasion" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
               
            </VStack>

            <VStack>
                <Text>Product Sleeves</Text>
                <Input value={product.sleeves} placeholder="sleeves (optional)" name="sleeves" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
               
            </VStack>

            <VStack>
                <Text>Product Neck</Text>
                <Input value={product.neck} placeholder="neck (optional)" name="neck" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            </VStack>

            <VStack>
                <Text>Product brand</Text>
                <Input value={product.brand} placeholder="brand required" name="brand" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>
          
            <VStack>
                <Text>Product Gender</Text>
                <Input value={product.gender} placeholder="gender required" name="gender" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>

            <VStack>
                <Text>Product Delivery</Text>
                <Input value={product.delivery} placeholder="delivery required" name="delivery" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>
          
            
            <VStack>
                <Text>Product Tags</Text>
                <Input value={product.tags} placeholder="tags (optional)" name="tags" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>
          
            
              
            <VStack>
                <Text>Product Stock</Text>
            <Input value={product.stock} placeholder="stock (required)"  name="stock" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
                
            </VStack>
      

        </Grid>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={ORANGE}  mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isLoading={loading} variant='outline' color={ORANGE} onClick={async()=>{
                setLoading(true)
                let allImages = ""
                for(let x in images){
                    allImages+=images[x]+","
                }

                let myproduct = {...product,image:allImages}

               

                let res = await axios({
                    method:"patch",
                    url:BASE_URL+`/product/${_id}`,
                    data:myproduct,
                    headers:{
                        Authorization:token
                    }
                    
                })

                if(res.data.status==1){
                    toast({
                        title: `Product updated`,
                        description: res.data.message,
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                      })
                      setLoading(false)
                      setRefresh((prev)=>!prev)
                      onClose()

                }else{

                    toast({
                        title: `Error`,
                        description: res.data.message,
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                      })
                      setLoading(false)

                }

            }}>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
             </MenuItem>
              <MenuItem onClick={async()=>{
                setLoading(true)
                let res = await axios({
                    method:"delete",
                    url:BASE_URL+`/product/${_id}`,
                    headers:{
                        Authorization:token
                    }
                })

                if(res.data.status==1){
                    toast({
                        title: `Product deleted`,
                        description: res.data.message,
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                      })
                      setLoading(false)
                      setRefresh((prev)=>!prev)

                }else{

                    toast({
                        title: `Error`,
                        description: res.data.message,
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                      })
                      setLoading(false)

                }
                
            }}>Delete</MenuItem>
            </MenuList>
          </Menu>
    </Td>
  </Tr>
}