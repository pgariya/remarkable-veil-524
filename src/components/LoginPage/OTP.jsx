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

const OTP = () => {
  const toast = useToast()
  const [phone, setPhone] = useState("")
  const [otp, setOTP] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const handleSubmit = () => {
    //compare the OTP to original
    console.log("clicked here");
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
          <Stack >
            <Text fontSize='2xl' align={'center'}>
              OTP will be send to your Registered Mobile No.
            </Text>
          </Stack>
          <Stack spacing={4} pt={2}>
            <FormControl id="mobile">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" placeholder='Phone no.' value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                onClick={onOpen}>
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
                <PinInput>
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
