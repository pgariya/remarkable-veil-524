import { Badge, Box, Button, Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { CONTAINER } from "../../../constants/constants";
import { AUTO, BLACK, BLANCHEDALMOND, BLUEVIOLET, CENTER, FILL_25PARENT, FILL_75PARENT, FILL_90PARENT, FILL_PARENT, FIXED, GREEN, LARGE, MAGENTA, MAROON, MEDIUM, NONE, ORANGE, PINK, PURPLE, RIGHT, STICKY, WHITE } from "../../../constants/typography";
import { CardAvatar } from "../../components/Avatar";
import "../../pages/style.css"
export default function SideNav({setTab ,tab,name,role}){
    
    const bg = ORANGE

    return <VStack  display={{base:NONE,sm:NONE,md:NONE,lg:"block"}} borderTopRightRadius={20} padding={"8px 0px"} h={"100vh"} className="sidebar" w={FILL_25PARENT}>

    <Flex justifyContent={"end"} maxH={150} padding={2} border={"1px solid orange"} borderRadius={6} alignItems={CENTER} margin={AUTO} w={FILL_90PARENT}>
        <VStack>
        <Heading fontSize={MEDIUM}  color={ORANGE}>{name}</Heading>
        <Badge colorScheme={GREEN} >{role}</Badge>
        </VStack>
        <CardAvatar name={name} role ={role}></CardAvatar>
    </Flex>

    <VStack gap={4} w={FILL_PARENT}>
        
    <Button variant={"outline"} borderColor={bg}  bg={tab==1&&bg} color={tab==1?WHITE:ORANGE} w={FILL_90PARENT} onClick={()=>{
        setTab(1)
    }}>Dashboard</Button>
    <Button variant={"outline"}  borderColor={bg} bg={tab==2&&bg} color={tab==2?WHITE:ORANGE} w={FILL_90PARENT} onClick={()=>{
        setTab(2)
    }}>Add Products</Button>
    <Button variant={"outline"} borderColor={bg} bg={tab==3&&bg}  color={tab==3?WHITE:ORANGE}w={FILL_90PARENT} onClick={()=>{
        setTab(3)
    }}>Edit Products</Button>
    <Button variant={"outline"} borderColor={bg} bg={tab==4&&bg}  color={tab==4?WHITE:ORANGE} w={FILL_90PARENT} onClick={()=>{
        setTab(4)
    }}>Manage Orders</Button>
    <Button variant={"outline"} borderColor={bg} bg={tab==5&&bg}  color={tab==5?WHITE:ORANGE} w={FILL_90PARENT} onClick={()=>{
        setTab(5)
    }}>Manage Admins</Button>
    
   
    </VStack>



</VStack>
}