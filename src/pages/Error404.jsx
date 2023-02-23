import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CONTAINER } from "../constants/constants";
import { CENTER, ORANGE, POINTER, UNDERLINE, X2LARGE, X6LARGE } from "../constants/typography";


export default function Error404(){
    
    const nav = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <Grid placeItems={CENTER}  h={400} mt={CONTAINER}>
        <Text color={ORANGE}>Are you lost? <span  style={{textDecoration:UNDERLINE,cursor:POINTER}} onClick={()=>{
            nav("/")
        }}> Go to Homepage</span></Text>
        <Heading size={X2LARGE}>404<br></br>Page not found</Heading>


    </Grid>



}