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
  console.log(isAuth)
  const location = useLocation()
  // console.log("login- location:", location)

  const handleSubmit = () => {
    let userData = {
      email,
      password
    }
    console.log(userData);

    dispatch(login(userData)).then(({ status, msg }) => {

      {
        status == 1 ? toast({
          title: 'Login Successfull.',
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

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
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
                <Text align={'left'} fontSize='sm'>
                  By continuing, you agree to Yepme's Conditions of Use and Privacy Notice. </Text>
              </Stack></Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}