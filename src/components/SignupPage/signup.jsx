import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BASE_URL } from '../../constants/config';
import { useNavigate } from 'react-router-dom';
import { FcInfo } from 'react-icons/fc'
import { CONTAINER } from '../../constants/constants';
import { Loading } from '../Loading';
import { ORANGE, POINTER, UNDERLINE } from '../../constants/typography';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast()
    const [loading,setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [role, setRole] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (password.length < 8){
            alert("Please Provide minimum digit password")

        }else if(!email.includes('@')){
            alert(" @ missing, Please fill correct emailID")

        }else if (phone.length !== 10){
            alert("Phone no. should be 10 digit")

        }else {
            let payload = {
                name,
                email,
                password,
                phone
            }
            console.log(payload);
            setLoading(true)
            fetch(`${BASE_URL}/user/register`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then(res => {
                    console.log(res)
                    setLoading(false)
                    toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    navigate("/login")
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                    toast({
                        title: 'Error.',
                        description: "Please try again.",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                })
        }
    }

    if(loading) return <Loading />

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            mt={"140px"}
            justify={'center'}
            >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box
                border={'1px solid black'}
                    // rounded={'lg'}
                    // boxShadow={'lg'}
                    p={5}>
                    <Stack pt={1}>
                        <Text fontSize='3xl' align={'center'}>
                            Create Account
                        </Text>
                    </Stack>
                    <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel> Name</FormLabel>
                            <Input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>

                        {/* <HStack> */}
                        <Box>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>Contact No.</FormLabel>
                                <Input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </FormControl>
                        </Box>
                        {/* <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel> Role</FormLabel>
                                    <select name="" placeholder='Role' onChange={(e) => setRole(e.target.value)}>
                                    <option value={''}>Select Role</option>
                                    <option value={'user'}>User</option>
                                    <option value={'admin'}>Admin</option>
                                    </select>
                                    
                                </FormControl>
                            </Box> */}
                        {/* </HStack> */}

                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <HStack>
                                <FcInfo />
                                <Text fontSize='xs' as='i'>Passwords must be atleast 8 characters</Text>
                            </HStack>
                        </FormControl>
                        <Text align={'left'} fontSize='sm'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Yepme. Message and data rates may apply.</Text>
                        <Stack spacing={2} >
                            <Button
                                bg={'yellow.300'}
                                color={'black'}
                                _hover={{
                                    bg: 'yellow.400',
                                }}
                                onClick={handleSubmit}>
                                Continue
                            </Button>
                        </Stack>
                        <Stack >
                            <Text align={'center'}>
                                Already have an account? <Link href='/login'  style={{color:ORANGE ,textDecoration:UNDERLINE,cursor:POINTER}}>Login</Link>
                            </Text>
                        </Stack>
                        <Stack>
                            <Text align={'left'} fontSize='sm'>
                                By creating an account or logging in, you agree to Yepme Conditions of Use and Privacy Policy.
                            </Text>
                        </Stack>

                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
