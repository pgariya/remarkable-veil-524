import { Box, Grid } from "@chakra-ui/react";
import { BLACK, CYAN, FILL_PARENT, GREEN, ORCHID, R1, R2, R3, WHITE, YELLOW, YELLOWGREEN } from "../../constants/typography";
import { StatsBox } from "../components/StatsBox.jsx";

export default function Dashboard(){

    return<Box w={FILL_PARENT}>

        <Grid gap={6} gridTemplateColumns={{base:R1,sm:R2,lg:R3}}>

            <StatsBox name={"Total orders"} br={6} size={300} color={WHITE} image={"https://www.svgrepo.com/show/374750/orders.svg"} classname={YELLOW} bcolor={YELLOW} count={37} />

            <StatsBox name={"Pending orders"} br={6} size={300} color={BLACK} image={"https://www.svgrepo.com/show/374750/orders.svg"} classname={CYAN} bcolor={CYAN} count={13} />

            <StatsBox name={"Total Earnings $"} br={6} size={300} color={WHITE} image={"https://www.svgrepo.com/show/500409/money.svg"} classname={"lush"} bcolor={GREEN} count={37} />

           
        </Grid>
        
    </Box>
}