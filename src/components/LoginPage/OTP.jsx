import React, { useState } from 'react'
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
  PinInput,
  PinInputField,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const OTP = ({handle}) => {
  const toast = useToast()
  const [email, setEmail] = useState("")
  const [otp, setOTP] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const navigate= useNavigate()

  const handleOTP = () => {
    const payload = { email :email}
    console.log("E",email);
    onOpen()
    axios.post(`http://localhost:4500/user/generateOTP`, payload)
      .then((res) => {
        console.log("res", res.data)
        //session save
        sessionStorage.setItem("otp", res.data.otp)
       alert("Check your mailbox")
      })
      .catch((err) =>{
       console.log(err)
        alert("Something went wrong, Please try again")
      })
}
const handleInputChange=(value)=>{
  console.log("working");
  setOTP(value)
  console.log(otp);
}
const handleSubmit = () => {
  //compare the OTP to original
  console.log(`otp is here`, otp);
if(otp==localStorage.getItem("otp")){
  console.log("Verified");
  navigate("/")
}
else
console.log("not verify");
}

return (
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Box
        // rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        // boxShadow={'lg'}
        border={'1px solid black'}
        p={5}>
        <Stack >
          <Text fontSize='2xl' align={'center'}>
            OTP will be send to your email
          </Text>
        </Stack>
        <Stack spacing={4} pt={2}>
          <FormControl id="mobile" >
            <FormLabel>Email id: </FormLabel>
            <Input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          {/* <FormControl id="otp">
                <FormLabel>Enter OTP</FormLabel>
                <Input type="password" placeholder='Otp' value={otp} onChange={(e)=> setOTP(e.target.value)}/>
              </FormControl> */}
          <Stack spacing={10}>
            <Button
              bg={'yellow.300'}
              color={'black'}
              _hover={{
                bg: 'yellow.400',
              }}
              onClick={handleOTP}
              >
              Send OTP
            </Button>
          </Stack>
        </Stack>
      </Box>


      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paste the OTP </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <PinInput value={otp} onChange={handleInputChange}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='teal' onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </Stack>
  </Flex>
)
}

export default OTP
