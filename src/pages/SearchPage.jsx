import { Box, Grid, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Paginantion from "../Admin/components/Paginantion/Paginantion";
import { Loading } from "../components/Loading";
import { BASE_URL } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { AUTO, FILL_90PARENT, R1, R2, R3, R4 } from "../constants/typography";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page,setPage] = useState(0)
  const [totalPages,setTotalPages]=useState(0)
  let query = searchParams.get("q")
    ? searchParams.get("q").toLocaleLowerCase()
    : "";
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    let getSearch = async () => {
        setLoading(true)
      let res = await axios({
        method: "get",
        url: BASE_URL + `/search?q=${query}&page=${page}`,
      });


      if (res.data.status == 1) {
        setLoading(false)
        setData(res.data.data)
        setTotalPages(res.data.count)
      } else {
        setLoading(false)
      }
    };

  if(query!=""){
    getSearch()
  }
  }, [searchParams,page]);

 

if(loading) return <Loading />
  
  return (
    <Box m={AUTO} width={FILL_90PARENT} mt={160}>
        <Heading>{totalPages+" Matching Results"}</Heading>

        <Grid mt={16} gap={4} gridTemplateColumns={{base:R1,sm:R2,md:R3,lg:R4}}>
        {data.map((el) => (
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
            <HStack display={"flex"} justifyContent="center" gap={3} m="auto">
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

        </Grid>

        <Paginantion page={page} setPage={setPage} totalPage={totalPages} divide={12}></Paginantion>
     
    </Box>
  );
}
