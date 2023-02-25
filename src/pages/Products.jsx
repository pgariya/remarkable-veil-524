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
import Paginantion from "../Admin/components/Paginantion/Paginantion";
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
  let [count, setcount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [filter, setFilter] = useState({
    price: {
      low: false,
      medium: false,
      high: false,
    },
    color: {
      black: false,
      grey: false,
      red: false,
      yellow: false,
      orange: false,
      teal: false,
      pink: false,
      purple: false,
      blue: false,
      green: false
    },
    material: {
      cotton: false,
      rayon: false,
      polyester: false,
      naylon: false
    },
    occasion: {
      casual: false,
      party: false,
      formal: false,
      semiformal: false
    },
    brand: {
      levis: false,
      vanheusen: false,
      yepme: false,
      zara: false,
    },
  });

  const search = useLocation().search;
  const catg = new URLSearchParams(search).get("category");
  

  console.log(catg);


  console.log(filter, "ya main change krnnnna haaa")

  let getdata = async (page) => {
    try {
      setisloading(true);
      let res = await axios.get(
        `${BASE_URL}/product?category=${catg}&page=${page}`
      );
      //?gender=female ya kuch bhi filter krna ha too
      setproductlist(res.data.data);
      setTotalPage(res.data.count);
      setisloading(false);
    } catch (err) {
      setisError(true);
    }
  };

  console.log(page, "pages ha yaa");
  console.log(totalPage, "total page");

  useEffect(() => {
    getdata(page);
  }, [page]);

  useEffect(() => {}, [griddata]);

  let handleHigh = () => {
    setcount(count + 1);
    let highdata = productlist.sort((a, b) => {
      return +b.price - +a.price;
    });

    setproductlist(highdata);
  };

  let handleLow = () => {
    setcount(count + 1);
    let lowdata = productlist.sort((a, b) => {
      return +a.price - +b.price;
    });

    setproductlist(lowdata);
  };

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
          w={"40%"}
          // border="5px solid"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        >
          {console.log(filter, "filterrrr data .. ha yaaa")}
          <SideBar filter={filter} setFilter={setFilter} />
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
              <Button onClick={handleHigh}> High to Low </Button>
              <Button onClick={handleLow}> Low to High </Button>
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
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)", border: "2px dotted black" }}
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

      {/* pagination   */}

      <Paginantion
        page={page}
        setPage={setPage}
        divide={10}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default ProductPage;
