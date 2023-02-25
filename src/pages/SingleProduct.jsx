import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillStarFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/config";
import { CONTAINER } from "../constants/constants";

const SingleProduct = () => {
  let params = useParams();
  // console.log(params);
  let { id } = params;

  let [prodata, setprodata] = useState({});
  let [error, seterror] = useState("");
  let [isloading, setisloading] = useState(false);
  let [arraydata, setarraydata] = useState([]);

  let getmydata = async (id) => {
    try {
      setisloading(true);
      let res = await axios.get(`${BASE_URL}/product/${id}`);
      setprodata(res.data.data[0]);
      setarraydata(res.data.data[0].image.trim().split(","));
      setisloading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  useEffect(() => {
    getmydata(id);
  }, [id]);

  console.log(prodata);
  console.log(arraydata, "araary");

  if (isloading) {
    return (
      <HStack m="auto" w="80%" mt={30}>
        <Skeleton height="600px" w="600px" />
        <Skeleton height="600px" w="600px" />
      </HStack>
    );
  }
  return (
    <Box mt={CONTAINER}>
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        margin="auto"
        mt={20}
        w="95%"
        mb={20}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          w={{ base: "100%", md: "50%" }}
          spacing={5}
          // mx="auto"
          m="auto"
          mt="20px"
        >
          {arraydata.map((el) => (
            <Box >
              <Image src={el} alt="single items" transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)",border: "2px dotted black"  }}/>
            </Box>
          ))}
        </SimpleGrid>

        <Stack gap={2} margin={"auto"} w={{ base: "80%", md: "45%" }}>
          <Heading textAlign={"left"} color={"blue.500"}>
            {prodata.category}
          </Heading>
          <Text textAlign={"left"}>
            Introducing our comfortable and stylish shirt, perfect for any
            occasion. Crafted from high-quality, breathable fabric, this shirt
            is designed for all-day wear. The classic fit provides a flattering
            silhouette, while the soft texture ensures maximum comfort. .
          </Text>
          <Text textAlign={"left"} fontSize="25px" fontWeight={"bold"}>
            {" "}
            ₹ {prodata.price}
          </Text>

          <HStack>
            {" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" /> <BsFillStarFill fill="#ffad47" />{" "}
            <BsFillStarFill fill="#ffad47" />
          </HStack>

          <Box w={"80%"}>
            <Text textAlign={"left"}>
              This shirt is easy to care for and can be machine washed and
              tumble dried, making it ideal for busy individuals who don't have
              the time for hand-washing or dry-cleaning.
            </Text>
          </Box>

          <Box>
            <HStack h="50px" overflow={"hidden"} position="relative">
              <Image
                src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                alt="offeers image"
                position={"absolute"}
                top="-50px"
              />
              <Text fontWeight={"bold"} position="absolute" left={"50px"}>
                offers
              </Text>
            </HStack>

            <HStack textAlign={"left"}>
              <Stack gap={1} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p={2} transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)",border: "2px dotted black"  }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)",border: "2px dotted black"  }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>

              <Stack gap={1} p={2} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)",border: "2px dotted black"  }}>
                <Text fontWeight={"bold"}>No Cost EMI</Text>
                <Text>
                  Avail No Cost EMI on select cards for orders above ₹3000
                </Text>
                <Text color={"teal"}>1 offer</Text>
              </Stack>
            </HStack>
          </Box>

          <Stack
            textAlign={"left"}
            w={{ base: "90%", md: "80%" }}
            p={5}
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)"  }}
            // border={"1px solid grey"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <HiInformationCircle fontSize={"25px"} />
            <Text fontWeight={"bold"}>Made In India</Text>
            <Text>
              Designed by IKEA of Sweden. Bringing quality, design, and
              affordability together.
            </Text>
          </Stack>

          <Button
            bg={"blue.500"}
            color="white"
            fontSize={"20px"}
            w={{ base: "90%", md: "60%" }}
            transition={"transform 2s"}
            _hover={{ transform: "scale(0.8)"  }}
          >
            {" "}
            <BsFillCartCheckFill fill="white" />{" "}
            <Text fontSize={"20px"} ml={"10px"} color="white">
              Add to cart
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProduct;
