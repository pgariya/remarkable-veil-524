import { Badge, Box, Grid, Heading } from "@chakra-ui/react";
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

export default function Dashboard() {
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
          count={37}
        />

        <StatsBox
          name={"Pending orders"}
          br={6}
          size={300}
          color={BLACK}
          image={"https://www.svgrepo.com/show/374750/orders.svg"}
          classname={CYAN}
          bcolor={CYAN}
          count={13}
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
