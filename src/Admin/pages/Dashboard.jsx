import { Badge, Box, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/config";
import qs from "qs"
import {
  BLACK,
  CYAN,
  FILL_PARENT,
  GREEN,
  LARGE,
  LEFT,
  ORCHID,
  R1,
  R2,
  R3,
  R4,
  WHITE,
  X2LARGE,
  YELLOW,
  YELLOWGREEN,
} from "../../constants/typography";
import { StatsBox } from "../components/StatsBox.jsx";
import "./style.css";

async function getData(query,endpoint,token){

  let res = await axios({
    url:BASE_URL+`/stat/${endpoint}?${qs.stringify(query)}`,
    method:"get",
    headers:{
      Authorization:token
    }
  })
  return res.data


}

export default function Dashboard({user}) {

  let {token} = useSelector((state)=>state.authReducer)
  const [totalOrder,setTotalOrder] = useState(0)
  const [pendingOrders,setPendingOrders] = useState(0)

  useEffect(()=>{

    let myData = async()=>{

      let data = await getData({adminId:"admin"+user.userId,request:"totalorder"},"order",token)
      console.log(data)
      if(data.status==1){

        setTotalOrder(data.count)

      }else{
        return
      }


    }

    myData()

  },[])

  useEffect(()=>{

    let myData = async()=>{

      let data = await getData({order:"admin"+user.userId,status1:"ordered",status2:"dispatched",request:"pendingorder"},"order",token)
      console.log(data)
      if(data.status==1){

        setPendingOrders(data.count)

      }else{
        return
      }


    }

    myData()

  },[])
  
  


  return (
    <Box w={FILL_PARENT}>
      <Badge colorScheme={YELLOW} fontSize={X2LARGE} m={8}>
        DASHBOARD
      </Badge>

      <Heading textAlign={LEFT} color={BLACK} m={8}>
        ORDERS
      </Heading>
      <Grid gap={6} gridTemplateColumns={{ base: R1, sm: R2, lg: R3 }}>
        <StatsBox
          name={"Total orders"}
          br={6}
          size={300}
          color={WHITE}
          image={"https://www.svgrepo.com/show/374750/orders.svg"}
          classname={YELLOW}
          bcolor={YELLOW}
          count={totalOrder}
        />

        <StatsBox
          name={"Pending orders"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/374750/orders.svg"}
          classname={CYAN}
          bcolor={CYAN}
          count={pendingOrders}
        />

        <StatsBox
          name={"Total Earnings $"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/500409/money.svg"}
          classname={"lush"}
          bcolor={GREEN}
          count={37}
        />
      </Grid>

      <Heading textAlign={LEFT} color={BLACK} m={8}>
        PRODUCTS
      </Heading>
      <Grid gap={6} gridTemplateColumns={{ base: R1, sm: R2, lg: R2 }}>
        <StatsBox
          name={"Total products"}
          br={6}
          size={300}
          color={WHITE}
          image={"https://www.svgrepo.com/show/498969/menu2.svg"}
          classname={YELLOW}
          bcolor={YELLOW}
          count={37}
        />

        <StatsBox
          name={"Out of stock"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/489639/unavailable.svg"}
          classname={CYAN}
          bcolor={CYAN}
          count={13}
        />
      </Grid>
      <Heading textAlign={LEFT} color={BLACK} m={8}>
        CATEGORIES
      </Heading>
      <Grid gap={6} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
        <StatsBox
          name={"Shirt"}
          br={6}
          size={300}
          color={WHITE}
          image={"https://www.svgrepo.com/show/506321/shirt.svg"}
          classname={YELLOW}
          bcolor={YELLOW}
          count={37}
        />

        <StatsBox
          name={"Top"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/395689/women-shirt-clothes-clothing-fashion-apparel.svg"}
          classname={CYAN}
          bcolor={CYAN}
          count={13}
        />

        <StatsBox
          name={"Kurtis"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/108239/women-dress.svg"}
          classname={"lush"}
          bcolor={GREEN}
          count={37}
        />

        <StatsBox
          name={"Partywear"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/491057/party.svg"}
          classname={CYAN}
          bcolor={CYAN}
          count={37}
        />
      </Grid>
    </Box>
  );
}
