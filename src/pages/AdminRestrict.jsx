import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { CONTAINER } from "../constants/constants";
import { CENTER, ORANGE, X2LARGE, X6LARGE } from "../constants/typography";


export default function AdminRestrict(){
    

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <Grid placeItems={CENTER}  h={400} mt={CONTAINER}>
        <VStack gap={4}>
            <Heading size={X2LARGE}>404<br></br>Restricted Area</Heading>
            <Text color={ORANGE}> You are not SuperAdmin</Text>
</VStack>


    </Grid>



}