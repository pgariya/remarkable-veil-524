import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Skeleton,
  useToast,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillStarFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { BASE_URL } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { AUTO, CENTER, FILL_PARENT, R1, R3 } from "../constants/typography";

const SingleProduct = () => {
  const {token,isAuth} = useSelector((state)=>state.authReducer)
  let params = useParams();
  // console.log(params);
  let { id } = params;
  const nav = useNavigate()
  let [prodata, setprodata] = useState({});
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);
  let [arraydata, setarraydata] = useState([]);
  const [presnet,setPresent]=useState(false)
  const toast = useToast()
  const [cartLoading,setCartLoading] = useState(false)

  let getmydata = async (id) => {
    try {
      setisloading(true);
      let res = await axios.get(`${BASE_URL}/product/${id}`);
      setprodata(res.data.data[0]);
      setarraydata(res.data.data[0].image.trim().split(","));
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  useEffect(()=>{
    console.log(id,"my id")
    const getStatus=async()=>{
      let res =await axios({
        method :"get",
        url:BASE_URL+`/cart/${id}`,
        headers:{
          Authorization:token
        }
      })

      // console.log(res)/


      if(res.data.status==1){
        setPresent(true)

      }else{
        console.log(res)
      }
    }
    getStatus()



  },[])

  useEffect(() => {
    getmydata(id);
  }, [id]);

  console.log(prodata);
  console.log(arraydata, "araary");


  const handleAdd = async()=>{
    setCartLoading(true)
    let cartItem = [{...prodata,quantity:1,pid:prodata._id,sizes:"M"}]
    delete cartItem[0]["_id"] //delete previous id
    console.log(prodata._id)
    console.log(cartItem,"cart data")
    let res =await axios({
      method :"post",
      url:BASE_URL+`/cart`,
      data:cartItem,
      headers:{
        Authorization:token
      }
    })

  console.log(res)
    if(res.data.status==1){
      setPresent(true)
      setCartLoading(false)

      toast({
        title: 'Item added in cart',
        description: res.status.message,
        status: 'success',
        duration: 2000,
        position: "top",
        isClosable: true,
      })

    }else{
      setCartLoading(false)
      toast({
        title: 'Failed to add in Cart',
        description: res.status.message,
        status: 'error',
        position:"top",
        duration: 2000,
        isClosable: true,
      })
    }

  }



  if (isloading) {
    return (
      <HStack m="auto" w="80%" mt={30}>
        <Skeleton height="600px" w="600px" />
        <Skeleton height="600px" w="600px" />
      </HStack>
    );
  }
  return (
    <Box mt={CONTAINER}>
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        margin="auto"
        mt={20}
        w="95%"
        mb={20}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          w={{ base: "100%", md: "50%" }}
          spacing={5}
          // mx="auto"
          m="auto"
          mt="20px"
        >
          {arraydata.map((el) => (
            <Box >
              <Image src={el} alt="single items" transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)",border: "2px dotted black"  }}/>
            </Box>
          ))}
        </SimpleGrid>

        <Stack gap={2} w={FILL_PARENT}>
          <Heading textAlign={"left"} >
            {prodata.title}
          </Heading>
          <Text textAlign={"left"}>
            Introducing our comfortable and stylish {prodata.category}, perfect for any
            occasion. Crafted from high-quality, breathable fabric, this {prodata.category}
            is designed for all-day wear. The classic fit provides a flattering
            silhouette, while the soft texture ensures maximum comfort. .
          </Text>
          <Text textAlign={"left"} fontSize="25px" fontWeight={"bold"}>
            {" "}
            ₹ {prodata.price}
          </Text>

          <HStack>
            {" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" />
          </HStack>

          <Box w={"80%"}>
            <Text textAlign={"left"}>
              This {prodata.category} is easy to care for and can be machine washed and
              tumble dried, making it ideal for busy individuals who don't have
              the time for hand-washing or dry-cleaning.
            </Text>
          </Box>

          <Box>
            <HStack h="50px" overflow={"hidden"} position="relative">
              <Image
                src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                alt="offeers image"
                position={"absolute"}
                top="-50px"
              />
              <Text fontWeight={"bold"} position="absolute" left={"50px"}>
                offers
              </Text>
            </HStack>

            <Grid w={FILL_PARENT} gap={4} mt={4} placeItems={CENTER} gridTemplateColumns={{base:R1,sm:R1,md:R1,lg:R3}} >
              <Stack gap={1} border= "2px solid orange" p={2} transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)"  }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} border= "2px solid orange"  transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)" }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} border= "2px solid orange"  transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)"  }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>
            </Grid>
          </Box>

          <Stack
            textAlign={"left"}
            w={FILL_PARENT}         
            transition={"transform 2s"}
            padding={5}
            _hover={{ transform: "scale(1.1)"  }}
            border={"2px solid orange"}
            
          >
            <HiInformationCircle fontSize={"25px"} />
            <Text  fontWeight={"bold"}>Made In India</Text>
            <Text>
              Designed by IKEA of Sweden. Bringing quality, design, and
              affordability together.
            </Text>
          </Stack>

          <Button
            bg={"blue.500"}
            color="white"
            isDisabled={cartLoading}
            isLoading={cartLoading}
            fontSize={"20px"}
            w={{ base: "90%", md: "60%" }}
            margin={AUTO}
            transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)"  }}
            onClick={()=>{
             if(isAuth){
              if(!presnet){
                handleAdd()
              }else{
                nav("/cart")
              }
             }else{
              nav("/login")
             }
            }}
          >
            {" "}
            <BsFillCartCheckFill fill="white" />{" "}
            <Text fontSize={"20px"} ml={"10px"} color="white">
              {presnet? "Go To Cart" : "Add to cart" }
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProduct;
