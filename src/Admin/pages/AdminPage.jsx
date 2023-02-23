import { Box, Button, Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CONTAINER, SUPER_ADMIN } from "../../constants/constants";
import { AUTO, CENTER, FILL_25PARENT, FILL_75PARENT, FILL_90PARENT, FILL_PARENT, LARGE, MEDIUM, RIGHT, WHITE } from "../../constants/typography";
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
import AdminRestrict from "../../pages/AdminRestrict";

export default function AdminPage(){
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
                    console.log(res.data.message)
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

        <Flex gap={4}  w={FILL_PARENT}>
            <SideNav name={user?.name} role={user?.role} setTab={setTabNumber} tab={tab}/>

            <Box className="fifty" overflowY={"scroll"}  padding={"2px 16px"} border={"2px dotted pink"} borderRadius={20} w={FILL_75PARENT}>


                {tab==1&&<Dashboard />}
                {tab==2&&<AddProduct />}
                {tab==3&&<EditProduct />}
                {tab==4&&<ManageOrders />}
                {tab==5&&user.role==SUPER_ADMIN?<ManageAdmins />:<AdminRestrict />}
                {tab==6&&<AddProduct />}



            </Box>


        </Flex>


    </Box>
}