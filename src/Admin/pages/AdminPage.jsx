import { Box, Button, Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CONTAINER } from "../../constants/constants";
import { AUTO, CENTER, FILL_25PARENT, FILL_75PARENT, FILL_90PARENT, FILL_PARENT, LARGE, MEDIUM, RIGHT, WHITE } from "../../constants/typography";
import "../../styles/styles.css"
import { CardAvatar } from "../components/Avatar";
import { SideNav } from "../components/SideNav";
import AddProduct from "./AddProduct";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import ManageAdmins from "./ManageAdmins";
import ManageOrders from "./ManageOrder";
import "./style.css"

export default function AdminPage(){

    const [tab,setTab]= useState(1)

    const setTabNumber=(number)=>{
        setTab(number)

    }


    return <Box  mt={CONTAINER}>

        <Flex gap={4}  w={FILL_PARENT}>
            <SideNav setTab={setTabNumber} tab={tab}/>

            <Box padding={8} border={"2px dotted pink"} borderRadius={20} w={FILL_75PARENT}>


                {tab==1&&<Dashboard />}
                {tab==2&&<AddProduct />}
                {tab==3&&<EditProduct />}
                {tab==4&&<ManageOrders />}
                {tab==5&&<ManageAdmins />}
                {tab==6&&<AddProduct />}



            </Box>


        </Flex>


    </Box>
}