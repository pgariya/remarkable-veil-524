import { Box, Flex, Image, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { BASE_URL } from "../../constants/config";
import { KURTIS, PARTY_WEAR, SHIRT } from "../../constants/constants";
import { AUTO, CENTER, FILL_PARENT, RIGHT, TOP } from "../../constants/typography";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { ProductItem } from "../components/ProductItem";
import Paginantion from "../components/Paginantion/Paginantion";

export default function EditProduct(){

    const [cat,setCat] = useState("")
    const {token} = useSelector((state)=>state.authReducer)
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(0)
    const [totalPage,setTotalPage] = useState(0)
    const [refresh,setRefresh] =useState(false)
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [page]);


    useEffect(()=>{

        const getData = async()=>{
            setLoading(true)
            let res = await axios({
                method:"post",
                url:BASE_URL+`/product/admin?category=${cat}&page=${page}`,
                headers:{
                    Authorization:token
                }
            })

            // console.log(res)

            if(res.data.status==1){

                setProduct(res.data.data)
                setTotalPage(res.data.count)
                setLoading(false)

            }else{
                setLoading(false)

            }

        }
        getData()



    },[cat,page,refresh])

    useEffect(()=>{
        setPage(0)
    },[cat])

    if(loading) return <Loading />

    return<Box padding={"8px 0px"} w={FILL_PARENT}>

        <Flex w={FILL_PARENT} alignItems={CENTER} >
            <Select value={cat} m={AUTO} onChange={(e)=>setCat(e.target.value)}>
                <option value="">Select Category</option>
                <option value={SHIRT}>Shirt</option>
                <option value={TOP}>Top</option>
                <option value={KURTIS}>Kurtis</option>
                <option value={PARTY_WEAR}>Party Wear</option>

            </Select>

        </Flex>


        <TableContainer>
  <Table variant='striped' colorScheme='orange'>
    <TableCaption>Filter products category wise</TableCaption>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>title</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Ordiginal Price</Th>
        <Th isNumeric>Stock left</Th>
        <Th isNumeric>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {product?.map((el)=><ProductItem key={el._id} setRefresh={setRefresh} {...el} />)}
      
    </Tbody>
    
  </Table>
</TableContainer>

<Paginantion key={page} page={page} setPage={setPage} divide={5} totalPage={totalPage} />
        
       
    </Box>
}