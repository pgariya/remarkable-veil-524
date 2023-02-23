import { Box, Button, Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { CONTAINER } from "../../../constants/constants";
import { AUTO, BLANCHEDALMOND, BLUEVIOLET, CENTER, FILL_25PARENT, FILL_75PARENT, FILL_90PARENT, FILL_PARENT, FIXED, LARGE, MAGENTA, MAROON, MEDIUM, PINK, PURPLE, RIGHT, STICKY, WHITE } from "../../../constants/typography";
import { CardAvatar } from "../../components/Avatar";
import "../../pages/style.css"
export default function SideNav({setTab ,tab}){
    
    const bg = MAGENTA

    return <VStack  borderTopRightRadius={20} padding={"8px 0px"} h={"100vh"} className="sidebar" w={FILL_25PARENT}>

    <Flex justifyContent={"end"} maxH={150} padding={2} border={"1px solid white"} borderRadius={6} alignItems={CENTER} w={FILL_90PARENT}>
        <Heading fontSize={MEDIUM}  color={WHITE}>Saurabh</Heading>
        <CardAvatar></CardAvatar>
    </Flex>

    <VStack gap={4} w={FILL_PARENT}>
        
    <Button variant={"outline"} bg={tab==1&&bg} color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(1)
    }}>Dashboard</Button>
    <Button variant={"outline"} bg={tab==2&&bg}  color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(2)
    }}>Add Products</Button>
    <Button variant={"outline"} bg={tab==3&&bg}  color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(3)
    }}>Edit Products</Button>
    <Button variant={"outline"} bg={tab==4&&bg}  color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(4)
    }}>Manage Orders</Button>
    <Button variant={"outline"} bg={tab==5&&bg}  color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(5)
    }}>Manage Admins</Button>
    <Button variant={"outline"} bg={tab==6&&bg}  color={WHITE} w={FILL_90PARENT} onClick={()=>{
        setTab(6)
    }}>Logout</Button>
   
    </VStack>



</VStack>
}