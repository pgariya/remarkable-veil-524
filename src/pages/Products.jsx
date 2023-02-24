import {
  Box,
  Button,
  filter,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerPro from "../components/ProductsPage/Drawer";
import SideBar from "../components/ProductsPage/SideBar";
import { BASE_URL } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { NONE } from "../constants/typography";
import ConvertToQuery from "../scripts/converToQuery";

const ProductPage = () => {
  let [productlist, setproductlist] = useState([]);
  let [isError, setisError] = useState(false);
  let [isloading, setisloading] = useState(false);
  let [griddata, setgriddata] = useState("");

  let [filterdata, setfilterdata] = useState({
    brand: "",
    price: "",
    occassion: "",
    material: "",
    color: "",
    size: "",
  });

  const search = useLocation().search;
  const catg = new URLSearchParams(search).get("category");

  console.log(filterdata,"dta object haaaa");

  for(let x in filterdata){
    if(filterdata[x] == ""){
      delete filterdata[x]
    }
  }
  let myQuery = ConvertToQuery(filterdata)
  console.log(filterdata,"dta object modified");
  console.log(myQuery)

  console.log(catg);

  let getdata = async () => {
    try {
      setisloading(true);
      let res = await axios.get(`${BASE_URL}/product?category=${catg}${myQuery}`);
      //?gender=female ya kuch bhi filter krna ha too
      setproductlist(res.data.data);
      setisloading(false);
    } catch (err) {
      setisError(true);
    }
  };

  useEffect(() => {
    getdata();
  }, [filterdata]);

  useEffect(() => {}, [griddata]);

  

  console.log(productlist);

  if (isloading) {
    return (
      <SimpleGrid
        m="auto"
        w="95%"
        pt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={15}
      >
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
      </SimpleGrid>
    );
  }

  console.log(griddata);
  return (
    <Box mt={CONTAINER}>
      {isError !== "" && <h1>{isError}</h1>}

      <Stack direction={{ base: "column", md: "row" }}>
        {/* //filter part is here  */}
        <Box
          display={{ base: "none", lg: "block" }}
          w={`${catg}` == "top" ? "80%" : "40%"}
          // border="5px solid"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        >
          {console.log(filterdata, "filterrrr data .. ha yaaa")}
          <SideBar filterdata={filterdata} setfilterdata={setfilterdata} />
        </Box>

        <Box display={{ base: "block", lg: "none" }} pt={5}>
          <DrawerPro />
        </Box>

        {/* //data is shown in SimpleGrid  */}
        <Box>
          <Stack
            gap={5}
            direction={{ base: "column", md: "row" }}
            px={12}
            mb={5}
            justifyContent={"space-between"}
          >
            <Box>
              <Heading textAlign={"left"}>{catg.toUpperCase()}</Heading>
            </Box>

            <HStack gap={5}>
              <Button>High To Low</Button>
              <Button>Low To High</Button>
            </HStack>

            <HStack gap={4} display={{ base: NONE, lg: "block" }}>
              <Text fontWeight={"bold"}> Shows </Text>
              <Button onClick={() => setgriddata(2)}> 2 </Button>
              <Button onClick={() => setgriddata(3)}> 3 </Button>
              <Button onClick={() => setgriddata(4)}> 4 </Button>
            </HStack>
          </Stack>

          <SimpleGrid
            columns={
              griddata !== ""
                ? { base: 1, md: 2, lg: griddata }
                : { base: 1, md: 2, lg: 3 }
            }
            gap={10}
            w="90%"
            m={"auto"}
          >
            {productlist.map((el) => (
              <Stack
                key={el._id}
                textAlign="left"
                _hover={{ border: "2px dotted black" }}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <Link to={`/products/${el._id}`}>
                <Image src={el.image.split(",")[0]} />
                </Link>

                <Stack p={5}>
                  <Heading>
                    {el.title.charAt(0).toUpperCase() + el.title.slice(1)}{" "}
                  </Heading>
                  <Text fontSize={"20px"} fontWeight="bold">
                    {" "}
                    Price: ₹ {el.price}
                  </Text>
                  <HStack
                    display={"flex"}
                    justifyContent="center"
                    gap={3}
                    m="auto"
                  >
                    {el.sizes.split(",").map((e) => (
                      <Box
                        borderRadius={"5px"}
                        border={"2px solid"}
                        px={2}
                        bg={"grey"}
                        color="white"
                      >
                        {" "}
                        {e}
                      </Box>
                    ))}
                  </HStack>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductPage;
