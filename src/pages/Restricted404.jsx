import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { CONTAINER } from "../constants/constants";
import { CENTER, ORANGE, X2LARGE, X6LARGE } from "../constants/typography";


export default function Restricated404(){
    

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <Grid placeItems={CENTER}  h={400} mt={CONTAINER}>
        <Text color={ORANGE}>  You may seeing this because you are not Admin</Text>
        <Heading size={X2LARGE}>404<br></br>Restricted Area</Heading>


    </Grid>



}