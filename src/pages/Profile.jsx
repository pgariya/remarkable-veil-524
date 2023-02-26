import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderLayout } from '../components/OrderLayout';
import { BASE_URL } from '../constants/config';
import { CONTAINER } from '../constants/constants';
import { AUTO, CENTER, COLUMN, FILL_30PARENT, FILL_70PARENT, FILL_90PARENT, FILL_PARENT, LARGE, ORANGE, RELATIVE, ROW, START, STICKY, TOP, X2LARGE, YELLOW } from '../constants/typography';
import { LOGOUT } from '../Redux/auth/auth.type';

export default function Profile() {

  const {token,name,email} = useSelector((state)=>state.authReducer)
  const dispatch = useDispatch()
  const [order,setOrder] = useState([])
  const [loading,setLoading]= useState(false)

  useEffect(()=>{

    const getData = async()=>{
      setLoading(true)
      let res = await axios({
        method:"get",
        url:BASE_URL+"/order",
        headers:{
          Authorization:token
        }
      })

      if(res.data.status==1){

        setOrder(res.data.data)

        setLoading(false)

        
      }else{

        setLoading(false)
      }
    }

    getData()



  },[])

  return (
    <Flex width={FILL_90PARENT} direction={{base:COLUMN,sm:COLUMN,md:COLUMN,lg:ROW}} alignItems={"flex-start"} gap={8} m={AUTO} mt={{base:10,sm:10,md:10,lg:160}}    >
      
      <Stack
       position={{base:RELATIVE,sm:RELATIVE,md:RELATIVE,lg:STICKY}} 
       top={160}
        borderWidth="1px"
        borderRadius="lg"
        w={{base:FILL_PARENT,sm:FILL_PARENT,md:FILL_PARENT,lg:FILL_30PARENT}}
        direction={{ base: 'column', md: 'row' }}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            w="100%"
            src={
              "https://i.pravatar.cc/300"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           {email}
          </Text>
          <Button colorScheme={ORANGE} onClick={()=>{
            dispatch({type:LOGOUT})
          }}>{"Logout"}</Button>
        
        </Stack>
      </Stack>

      <VStack   borderRadius="lg"
 alignItems={START} p={4}  borderWidth="1px"
 w={{base:FILL_PARENT,sm:FILL_PARENT,md:FILL_PARENT,lg:FILL_70PARENT}} mt={{base:180,sm:180,md:180,lg:0}} mb={40}>
        <Badge mb={8} fontSize={X2LARGE}  colorScheme={YELLOW}>Your Orders</Badge>

        {order?.map((el)=><OrderLayout {...el} />)}

      </VStack>
    </Flex>
   
  );
}