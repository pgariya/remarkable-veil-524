import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CONTAINER } from '../../constants/constants';
import { ORANGE, POINTER, UNDERLINE } from '../../constants/typography';
import { login } from '../../Redux/auth/auth.actions';
import { store } from '../../Redux/store';
import { Loading } from '../Loading';

export default function Login() {

  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [phone, setPhone] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuth){
      navigate("/")
    }
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {isAuth,isLoading,isError} = useSelector((store) => store.authReducer)
 
  const location = useLocation()

  const handleSubmit = () => {
    if(email==""||password==""){

      toast({
        title: 'Please enter all the details',
        description: "Email or Password Maybe Empty",
        status: 'error',
        duration: 3000,
        isClosable: true,
    })

      return
    }
    let userData = {
      email,
      password
    }

    dispatch(login(userData)).then(({ status, msg }) => {

      {
        status == 1 ? toast({
          title: 'Login Successful.',
          description: msg,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
          :
          toast({
            title: 'Error.',
            description: msg,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      }

      if(status==1){
        location.state ? navigate(location.state) : navigate("/")

      }

    })

  }

  if(isLoading) return <Loading />
  // if(isError) return <Heading mt={CONTAINER}>Error...</Heading>

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      mt={"80px"}
     >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          // rounded={'lg'}
        
          border={'1px solid black'}
          // boxShadow={'lg'}
          p={5}>
          <Stack>
            <Text fontSize='3xl' align={'center'}>
              Sign in
            </Text>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <a href="/login/otp">Forgot password?</a>
              </Stack>
              <Button
                // size="lg"
                bg={'yellow.300'}
                color={'black'}
                _hover={{
                  bg: 'yellow.400',
                }}
                onClick={handleSubmit}>
                Continue
              </Button>
              <Stack>
                <Text>New here ? <span style={{color:ORANGE ,textDecoration:UNDERLINE,cursor:POINTER}} onClick={()=>{
                  navigate("/signup")
                }}>Sign up</span></Text>
                <Text align={'left'} fontSize='sm'>
                  By continuing, you agree to Yepme's Conditions of Use and Privacy Notice. </Text>
              </Stack></Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}