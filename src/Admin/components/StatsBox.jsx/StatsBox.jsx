import { Badge, Box, Flex, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { CENTER, FILL_30PARENT, FILL_PARENT, SB, START } from "../../../constants/typography";
import "./style.css"
export default function StatsBox({name,count,bcolor,image,size,color,classname,br}){


    return <Box borderRadius={br} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}  className={classname}  color={color}>

        <Flex gap={2} justify={SB} alignItems={CENTER} padding={2} w={FILL_PARENT}>
            <VStack>
                <HStack alignItems={START} justify={SB}>
                    <Badge colorScheme={bcolor}>{name}</Badge>
                </HStack>
                <Heading>{count}</Heading>
            </VStack>
            <Image w={50} src={image}></Image>

        </Flex>


    </Box>


}