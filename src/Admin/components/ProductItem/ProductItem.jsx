import { Image } from "@chakra-ui/react";
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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from "@chakra-ui/react";
import { FILL_PARENT, ORANGE } from "../../../constants/typography";

export default function ProductItem({image,
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
             <MenuItem onClick={()=>{

             }}>Edit Product</MenuItem>
              <MenuItem onClick={()=>{
                
            }}>Delete</MenuItem>
            </MenuList>
          </Menu>
    </Td>
  </Tr>
}