import { Box, Button, Card, CardBody, Flex, Heading, IconButton, Input, Text, useDisclosure, VStack, Wrap } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { CONTAINER, SUPER_ADMIN } from "../../constants/constants";
import { ABSOLUTE, AUTO, CENTER, FILL_25PARENT, FILL_75PARENT, FILL_90PARENT, FILL_PARENT, FIXED, LARGE, MEDIUM, ORANGE, RELATIVE, RIGHT, WHITE } from "../../constants/typography";
import "../../styles/styles.css"
import { CardAvatar } from "../components/Avatar";
import { SideNav } from "../components/SideNav";
import AddProduct from "./AddProduct";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import ManageAdmins from "./ManageAdmins";
import ManageOrders from "./ManageOrder";
import logo from "../../assets/logo.png"
import "./style.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import {GiHamburgerMenu} from "react-icons/gi"
import AdminRestrict from "../../pages/AdminRestrict";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { MobileSideNav } from "../components/MobileSideNav";

export default function AdminPage(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    useEffect(() => {

        window.scrollTo(0, 0);
      }, []);

    const [tab,setTab]= useState(1)
    const {isAuth,token} = useSelector((store) => store.authReducer)
    const nav = useNavigate()
    const [user,setUser] = useState({status:false})

    const setTabNumber=(number)=>{
        setTab(number)

    }
  

    useEffect(()=>{

        if(isAuth){

            const getData =async()=>{
                let res = await axios({
                    method:"get",
                    url:BASE_URL+"/user/getuser",
                    headers:{
                        Authorization:token
                    }
                })

                if(res.data.status==1){
                    setUser({
                        admin:"admin"+res.data.userId,
                        role:res.data.role,
                        status:true,
                        name:res.data.name
                    })
                }else{
                    setUser({
                        status:false
                    })
                    nav("/404")
                }
            }
            getData()


        }else{
            nav("/login")

        }

    },[isAuth])


   

    if(!user.status) return <Loading />

   if(user.status) return <Box   mt={"160px"}>

        <Flex  gap={4} position={RELATIVE}  w={FILL_PARENT}>
            <Wrap zIndex={999} display={{base:"block",sm:"block",md:"block",lg:"none"}} h={"100vh"} position={FIXED} top={"180px"} right={2}>
            <>
      <IconButton icon={<GiHamburgerMenu />} colorScheme={ORANGE} ref={btnRef} onClick={onOpen}>
        Open
      </IconButton>
      <Drawer

        isOpen={isOpen}
        placement={RIGHT}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin Panel</DrawerHeader>

          <DrawerBody>
          <MobileSideNav onClose={onClose} name={user?.name} role={user?.role} setTab={setTabNumber} tab={tab}/>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
            </Wrap>
            <SideNav  name={user?.name} role={user?.role} setTab={setTabNumber} tab={tab}/>

            <Box className="fifty" overflowY={"scroll"}  padding={"2px 16px"} border={"2px dotted pink"} borderRadius={20} w={{base:FILL_PARENT,sm:FILL_PARENT,md:FILL_PARENT,lg:FILL_75PARENT}}>

                {(()=>{

                    switch(tab){
                        case 1:{
                            return  <Dashboard user={user} />
                            
                        }

                        case 2:{
                            return <AddProduct />
                        }

                        case 3:{

                            return <EditProduct />
                        }

                        case 4:{
                            return <ManageOrders />
                        }

                        case 5:{
                            return user.role==SUPER_ADMIN?<ManageAdmins />:<AdminRestrict />
                        }

            

                        default:{
                            return <Dashboard />
                        }
                    }

                })()}
                
                



            </Box>


        </Flex>


    </Box>
}