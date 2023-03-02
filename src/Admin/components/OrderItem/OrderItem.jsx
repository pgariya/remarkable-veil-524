import { Badge, Grid, Image, Input, Text, useDisclosure, useToast, VStack } from "@chakra-ui/react";
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
import { FILL_PARENT, GREEN, ORANGE, R1, R2, R3, RED, YELLOW } from "../../../constants/typography";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";
import { useSelector } from "react-redux";
import { CANCELLED, DELIVERED, DISPATCHED, ORDERED } from "../../../constants/constants";
import { Loading } from "../../../components/Loading";


export default function OrderItem({setRefresh,
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
    address,
    status,
    orderDate,
    quantity,
    totalDiscountPrice,
    tags,
    stock}){
        const {token} = useSelector((state)=>state.authReducer)
        const toast = useToast()
        const { isOpen, onOpen, onClose } = useDisclosure()
        

        
        const handleStatus = async(status)=>{
            let res = await axios({
                method:"patch",
                url:BASE_URL+`/order/${_id}`,
                data:{status},
                headers:{
                    Authorization:token
                }
            })

            if(res.data.status==1){

                toast({
                    title: `Status Updated`,
                    description: res.data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
                  setRefresh((prev)=>!prev)

            }else{

                toast({
                    title: `Something went wrong`,
                    description: res.data.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })

            }

        }

     

    return <Tr>
    <Td><Image w={"40px"} src = {image?.split(",")[0]}></Image></Td>
    <Td maxW={"100px"} overflow={"hidden"} isTruncated>{title}</Td>
    <Td isNumeric>{price}</Td>
    <Td isNumeric>{originalPrice}</Td>
    <Td isNumeric>{stock}</Td>
    <Td  maxW={"100px"} overflow={"hidden"} isTruncated>{address}</Td>
    <Td isNumeric>{quantity}</Td>
    <Td ><Badge colorScheme={status==ORDERED?YELLOW:status==DISPATCHED?ORANGE:status==DELIVERED?GREEN:RED}>{status}</Badge></Td>
    <Td>
    <Menu colorScheme={ORANGE} w={FILL_PARENT}>
            <MenuButton  w={FILL_PARENT} as={Button} rightIcon={<FaAngleDown />}>
              Status
            </MenuButton>
            <MenuList>
            <MenuItem as={Button} display={status==ORDERED?"none":"block"}  onClick={()=>{
                handleStatus(ORDERED)
            }}>Ordered</MenuItem>
            <MenuItem as={Button} display={status==DISPATCHED?"none":"block"} onClick={()=>{
                handleStatus(DISPATCHED)
            }}>Dispatched</MenuItem>
            <MenuItem as={Button} display={status==DELIVERED?"none":"block"} onClick={()=>{
                handleStatus(DELIVERED)
            }}>Delivered</MenuItem>
            <MenuItem as={Button} display={status==CANCELLED?"none":"block"} onClick={()=>{
                handleStatus(CANCELLED)
            }}>Cancelled</MenuItem>
          

            </MenuList>
          </Menu>
    </Td>
  </Tr>
}