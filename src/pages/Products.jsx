import {
  Box,
  Button,
  filter,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Paginantion from "../Admin/components/Paginantion/Paginantion";
import DrawerPro from "../components/ProductsPage/Drawer";
import SideBar from "../components/ProductsPage/SideBar";
import { BASE_URL } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { NONE } from "../constants/typography";

const ProductPage = () => {

  let [productlist, setproductlist] = useState([]);
  let [fulldata,setfullData]= useState([]);
  let [isError, setisError] = useState(false);
  let [isloading, setisloading] = useState(false);
  let [griddata, setgriddata] = useState("");
  let [count, setcount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  let [query,setQuery]= useState("");

let [searchParam,setSearchParam] = useSearchParams()



useEffect(() => {
        window.scrollTo(0, 0);
      }, [page]);

  const [filter, setFilter] = useState({
    price: {
      max: false,
      min: false,
    },
    color: {
      black: false,
      gray: false,
      red: false,
      yellow: false,
      orange: false,
      white: false,
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
      mufti:false
    },
  });

  const search = useLocation().search;
  const catg = new URLSearchParams(search).get("category");
  
  

  
  //filtered object of object
  function findTrueValues(data) {
    const trueValues = {};
    for (const key in data) {
      for (const subKey in data[key]) {
        if (data[key][subKey]) {
          trueValues[key] = subKey;
        }
      }
    }
    return trueValues;
  }

  
 let finalFilter= findTrueValues(filter)

const searchParams = new URLSearchParams(finalFilter);
const queryString = searchParams.toString();



//search box.....
const handleInputChange = (event) => {
  const query = event.target.value.toLowerCase();
  setQuery(query);

if(!query){
  setproductlist(fulldata)
}else{

  const filteredData = productlist.filter(item => item.title.includes(query));
  setproductlist(filteredData);

}

  
}


  let getdata = async (page) => {
    try {
      setisloading(true);
      let res = await axios.get(
        `${BASE_URL}/product?category=${catg}&page=${page}&${queryString}`
      );
      //?gender=female ya kuch bhi filter krna ha too
      setproductlist(res.data.data);
      setfullData(res.data.data)
      setTotalPage(res.data.count);
      setisloading(false);
    } catch (err) {
      setisError(true);
    }
  };

  useEffect(() => {
    getdata(page);
  }, [page, filter,searchParam]);

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

  
  useEffect(() =>{
    setSearchParam({category: `${catg}` ,page:page+1 , ...finalFilter })
  
  },[page, filter])



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

  return (
    <Box mt={CONTAINER}>
      {isError !== "" && <h1>{isError}</h1>}

      <Stack direction={{ base: "column", md: "row" }}>
        {/* //filter part is here  */}
        <Box
          display={{ base: "none", lg: "block" }}
          maxw={"50%"}
          minW={"30%"}
          // border="5px solid"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        >

          <SideBar filter={filter} setFilter={setFilter} />
        </Box>

        <Box display={{ base: "block", lg: "none" }} pt={5}  w={"20%"} >
          <DrawerPro filter={filter} setFilter={setFilter} />
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

     <Stack my={5} >
     <Input w={"90%"} m="auto" type="text" value={query} onChange={handleInputChange} placeholder="Search Items by Title. . . . . . . ." />
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
                      key={100000 + Math.floor(Math.random() * 900000)}
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
