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
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [role, setRole] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = () => {
        let payload = {
            name,
            email,
            password,
            phone
        }
        console.log(payload);
        fetch(`/users/register`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            })
            .catch(err => {
                console.log(err)
                toast({
                    title: 'Error.',
                    description: "Please try again.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
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
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign Up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        sign up to Yepme.!
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
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
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'teal'}
                                color={'white'}
                                _hover={{
                                    bg: 'tomato',
                                }}
                                onClick={handleSubmit}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link href={'#'} color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
