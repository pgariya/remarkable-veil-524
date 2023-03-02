import { Badge, Box, Button, Grid, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/config";
import { CENTER, FILL_PARENT, ORANGE, R1, R2, R3, X2LARGE } from "../../constants/typography";
import ExcelToJson from "../components/ExcelToJson/ExcelToJson";

let schema = {
                    image: "",
                    title: "",
                    description: "",
                    price: "",
                    originalPrice: "",
                    sizes: "",
                    category: "",
                    style: "",
                    color: "",
                    material: "",
                    fit: "",
                    occasion: "",
                    sleeves: "",
                    neck: "",
                    brand: "",
                    gender: "",
                    delivery:"",
                    tags:"",
                    stock:""


}




export default function AddProduct(){

    const {token} = useSelector((state)=>state.authReducer)
    const [loading,setLoading] = useState(false)

    const [product,setProduct] =useState(schema)
    const toast = useToast()
    const getProductData =async(data)=>{
        setLoading(true)
        let res = await axios({
            method:"post",
            url:BASE_URL+"/product",
            data:data,
            headers:{
                Authorization:token
            }
        })

        if(res.data.status==1){

            toast({
                title: `Products Added`,
                description: "Products Added Successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })

              setLoading(false)

        }else{
            toast({
                title: `Something Went Wrong`,
                description: ` ${res.data.message} `,
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              setLoading(false)


        }
        
    }


    const handleInput =(e)=>{

        let text = e.target.value

        setProduct((prev)=>{
            return {...prev,[e.target.name]:text}
        })

        
    }

    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return<Box padding={"8px 0px"} w={FILL_PARENT}>
        <ExcelToJson loading={loading} getProductData={getProductData} />
        <Badge m={"8px"} fontSize={X2LARGE} colorScheme={"orange"}>Add Single Product</Badge>
        <Grid p={4} gap={2} gridTemplateColumns={{lg:R3,sm:R2,base:R1}}>
            <Input placeholder="Image Links separated by comma (,) required" name="image" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="Product Title required" name="title" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="Product Description required" name="description" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="Product Price required" name="price" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="Product Original Price required" name="originalPrice" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="sizes separated by comma (,) required" name="sizes" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="category required" name="category" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="style required" name="style" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="material (optinal)" name="material" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="color required" name="color" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="fit (optional)" name="fit" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="occasion (optional)" name="occasion" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="sleeves (optional)" name="sleeves" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="neck (optional)" name="neck" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="brand required" name="brand" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="gender required" name="gender" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="delivery required" name="delivery" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="tags (optional)" name="tags" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>
            <Input placeholder="stock (required)"  name="stock" onChange={handleInput} border={"1px solid orange"} color="orange"></Input>

        </Grid>

        <Button colorScheme={ORANGE}  isLoading={loading} onClick={()=>{
            let {image,
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
                tags,stock} = product

            if(title==""||image==""||description==""||price==""||originalPrice==""||sizes==""||category==""||style==""||color==""||brand==""||gender==""||delivery==""||stock==""){

                toast({
                    title: `Required details missing`,
                    description: "Please enter all required details",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })

            }else{
                getProductData([{...product}])

            }




        }}>Add Product</Button>

    </Box>
}