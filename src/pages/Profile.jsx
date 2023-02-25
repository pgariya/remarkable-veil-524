import {
    Box,
    Center,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { BiPurchaseTag } from 'react-icons/bi';
  import { GrDeliver } from 'react-icons/gr';
  import { GoLocation } from 'react-icons/go';
  import { MdPending } from 'react-icons/md';
  import { FcCancel,FcApproval,FcPlus,FcPieChart,FcHome } from 'react-icons/fc';
  import Lottie from "react-lottie";
  

  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontSize={'3xl'} fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'3xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function Profile() {


    return (
      <Box maxW="7xl"  marginTop={'150px'} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'} 
          >   
          <Center>
            <h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'} >Your Account  </h1> 
            <BsPerson size={'2em'} />
        </Center>          
        </chakra.h1>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Total Orders'}
            stat={'106'}
            icon={<FcPlus size={'3em'} />}
         />
          <StatsCard
            title={'Pending Orders'}
            stat={'4'}
            icon={<FcPieChart size={'3em'} />}
          />
          <StatsCard
            title={'Cancelled Orders'}
            stat={'4'}
            icon={<FcCancel size={'3em'} />}
          />
          <StatsCard
            title={'Delivered Orders'}
            stat={'102'}
            icon={<FcApproval size={'3em'} />}
          />
          <StatsCard
            title={'Your Address'}
            stat={'Ghaziabad, U.P'}
            icon={<FcHome size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }