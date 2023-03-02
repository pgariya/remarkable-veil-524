import { Badge, Box, Button, Card, CardBody, color, Flex, Heading, HStack, Input, Select, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { BASE_URL } from "../../constants/config";
import { ADMIN, DEACTIVATE, DELETE, SUPER_ADMIN, USER } from "../../constants/constants";
import { CENTER, FILL_PARENT, LARGE, LEFT, MEDIUM, SB, X2LARGE, YELLOW } from "../../constants/typography";
import  AdminCard  from "../components/AdminCard/AdminCard";
import { CardAvatar } from "../components/Avatar";
import {FaAngleDown} from "react-icons/fa"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from "@chakra-ui/react";
import Paginantion from "../components/Paginantion/Paginantion";

export default function ManageAdmins({userRole}){
    const {token} = useSelector((state)=>state.authReducer)
    const [role,setRole] = useState()
    const [loading,setLoading]  = useState(false)
    const [sloading,setSLoading]  = useState(false)
    const [email,setEmail] = useState("")
    const [admins,setAdmins]= useState([])
    const [roleData,setRoleData] = useState(ADMIN)
    const toast = useToast()
    const [page,setPage]=useState(0)
    const [totalPage,setTotalPage]=useState(0) //work on this

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [page]);

    const ChangeRole = async(newRole,email)=>{
        setLoading(true)
        let res = await axios({
            method:"patch",
            data:{
                role:newRole
            },
            url:BASE_URL+`/user/superadmin/${email}`,
            headers:{
                Authorization:token
            }
        })
        if(res.data.status==1){

            if(newRole==DELETE){

                toast({
                    title: `User deleted`,
                    description: res.data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })

              setLoading(false)
              setRoleData(USER)
             return

            }



            toast({
                title: `Promoted to ${newRole}`,
                description: res.data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              setLoading(false)
              setRoleData(newRole)

        }else{


            if(newRole==DELETE){

                toast({
                    title: `User deletion failed`,
                    description: res.data.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })

              setLoading(false)
                  return

            }

            toast({
                title: `Error`,
                description: res.data.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
              setLoading(false)

        }

    }

    useEffect(()=>{
            setSLoading(true)
            const getAdmins = async()=>{
                let res = await axios({
                    method:"get",
                    url:BASE_URL+`/user/admin?page=${page}`,
                    headers:{
                        Authorization:token,
                        role:roleData
                    }
                })


                if(res.data.status==1){
                setAdmins(res.data.data)
                setTotalPage(res.data.count)
                setSLoading(false)
                }else{
                      setSLoading(false)

                }
            

            }

            getAdmins()
        
    },[roleData,page])

    useEffect(()=>{
      setPage(0)
    },[roleData])

    if(sloading) return <Loading />

   return <Box padding={"8px 0px"}  w={FILL_PARENT}>
   
        <Card>

            <CardBody>

                <Badge m={"8px"} fontSize={X2LARGE} colorScheme={"orange"}>PROMOTE USER</Badge>
                <HStack  gap={2}>
                    <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                    <Select value={role} onChange={(e)=>setRole(e.target.value)}>
                        <option value={""}>Role</option>
                        <option value={USER}>User</option>
                        <option value={ADMIN}>Admin</option>
                        <option value={DEACTIVATE}>Deactivate</option>
                        <option value={SUPER_ADMIN}>Super Admin</option>
                        <option value={DELETE}>Delete User</option>
                    </Select>
                    <Button isLoading={loading} w={200} colorScheme={"orange"}  onClick={async()=>{
                        if(role==""||email==""){
                            toast({
                                title: `Error`,
                                description: "enter valid details",
                                status: 'error',
                                duration: 2000,
                                isClosable: true,
                              })
                            return
                        }
                      ChangeRole(role,email)
                    }}>Promote</Button>

                </HStack>
                

            </CardBody>


        </Card>
        <Flex justify={SB} alignItems={CENTER}>
        <Heading textAlign={LEFT} margin={4} size={LARGE}>{roleData.toUpperCase()} LIST</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>
              Filter Users
            </MenuButton>
            <MenuList>
              <MenuItem onClick={()=>{
                setRoleData(USER)
              }}>User</MenuItem>
               <MenuItem onClick={()=>{
                setRoleData(ADMIN)
              }}>Admin</MenuItem>
              <MenuItem onClick={()=>{
                setRoleData(SUPER_ADMIN)
              }}>Super Admin</MenuItem>
              <MenuItem onClick={()=>{
                setRoleData(DEACTIVATE)
              }}>Deactivate</MenuItem>
            </MenuList>
          </Menu>

        </Flex>
        <VStack>
            {admins?.map(({name,email,role,_id})=><AdminCard key={_id} email={email} name={name} role={role} setRole={ChangeRole} />)}
        </VStack>

        <Paginantion setPage={setPage} totalPage={totalPage} divide={5} page={page}></Paginantion>

        
    </Box>
}