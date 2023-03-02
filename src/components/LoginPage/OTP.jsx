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
import emailjs from "@emailjs/browser"


const OTP = ({handle}) => {

  const toast = useToast()
  const [email, setEmail] = useState("")
  const [checkotp, setCheckOTP] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const navigate = useNavigate()

  const handleOTP = () => {
    // const payload = { email :email}
    // onOpen()
    // axios.post(`http://localhost:4500/user/generateOTP`, payload)
    //   .then((res) => {
    //     //session save
    //     sessionStorage.setItem("otp", res.data.otp)
    //    alert("Check your mailbox")
    //   })
    //   .catch((err) =>{
    //     alert("Something went wrong, Please try again")
    //   })

    const otp = Math.floor(Math.random() * 9000) + 1000;

    emailjs.send('service_95mup4r', 'template_h0n101p', {
      user_email_id: email,
      otp: otp
    }, 'OAAgS4baLv5nwlbcO')
      .then(function (response) {
        onOpen()
        localStorage.setItem("otp", otp)
      }, function (error) {
      });
  }
  const handleInputChange = (value) => {

    setCheckOTP(value)
  }
  const handleSubmit = () => {
    //compare the OTP to original

    if (checkotp == localStorage.getItem("otp")) {
      alert("User Verified")
      navigate("/")
    }
    else
      alert("Not verified")
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
              <Input type="email" placeholder='email' name="user_email_id" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
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
                <PinInput value={checkotp} onChange={handleInputChange}>
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
