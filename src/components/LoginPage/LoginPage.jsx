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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/auth/auth.actions';
import { store } from '../../Redux/store';

export default function Login() {

  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [phone, setPhone] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAuth = useSelector((store) => store.authReducer.isAuth)
  const location = useLocation()
  console.log("login- location:", location)

  const handleSubmit = () => {
    let userData = {
      email,
      password
    }
    console.log(userData);
   
    dispatch(login(userData)).then(res => {
      console.log(res);
      console.log(isAuth);
      {
        isAuth ? toast({
          title: 'Login Successfull.',
          description: "Redirected to Home page",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
          :
          toast({
            title: 'Error.',
            description: "Please try again.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      }
      location.state ? navigate(location.state) : navigate("/")
    })
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
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
                bg={'teal'}
                color={'white'}
                _hover={{
                  bg: 'tomato',
                }}
                onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}