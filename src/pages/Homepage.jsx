import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SlideShow from "../components/Homepage/SlideShow";
import { CONTAINER } from "../constants/constants";
import { BOLD, R1, R2, R3, R4 } from "../constants/typography";
import "../styles/styles.css";

export default function Homepage() {
  return (
    <Box  m={"auto"} mt={CONTAINER}>
      {/* 1st box  */}
      <Stack
        direction={{ base: "column", md: "row" }}
        w={"95%"}
        gap={5}
        m="auto"
      >
        <SlideShow />

        <Stack
          // w={{ base: "95%", md: "40%" }}
          direction={{ base: "row", md: "column" }}
          gap={{ base: "5", md: "2" }}
          justifyContent="center"
        >
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/men_shoes_rhs1_16march.jpg"
              alt="shoes"
            />
          </Box>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/men1_tees_rhs1_feb18.jpg"
              alt="t-Shirt"
            />
          </Box>
        </Stack>
      </Stack>

      {/* offfers */}
      <Box my={5}>
        <Heading>Offers</Heading>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{ base: R2, md: R3, lg: R4 }}
        w={"95%"}
        m="auto"
        gap={3}
      >
        <Box>
          <Link to={"/products?category=shirt"}>
          <Image
            src="http://staticawsy.yepme.com/images/square_shirts_09022018.jpg"
            alt="shirt"
            />
            </Link>
        </Box>

        <Box>
          <Link to={"/products?category=top"}>
          <Image
            src="http://staticawsy.yepme.com/images/square-tops_09022018.jpg"
            alt="top"
            />
            </Link>
        </Box>

        <Box>
          <Image
            src="http://staticawsy.yepme.com/images/square_kurtis_09022018.jpg"
            alt="kurties"
          />
        </Box>

        <Box>
          <Image
            src="http://staticawsy.yepme.com/images/square_partywear_09022018.jpg"
            alt="mens-partywear"
          />
        </Box>
      </Box>

      {/* 3rd div  */}

      <Box
        display={"grid"}
        gridTemplateColumns={{ base: R1, md: R2, lg: R3 }}
        m="auto"
        gap={5}
        mt={20}
        mb={20}
        w="95%"
      >
        <Stack m={"auto"} gap={4}>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/men_bottomwear_10oct17.jpg"
              alt="men-bottomwear"
            />
          </Box>

          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/men_watches_10oct17.jpg"
              alt="men-watches"
            />
          </Box>
        </Stack>

        <Stack gap={5} m={"auto"}>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/center3-4-17.jpg"
              alt="yepme-logotype"
            />
          </Box>

          <Box my={10}>
            <Text fontSize={"25px"} fontWeight={BOLD}>
              STYLE ALERT
            </Text>
          </Box>

          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/center_images_winterwear_10oct17.gif"
              alt="winter-wear"
            />
          </Box>
        </Stack>

        <Stack m={"auto"} gap={4}>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/women_bottomwear_10oct17.jpg"
              alt="women-bottomwear"
            />
          </Box>

          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/women_watches_10oct17.jpg"
              alt="women-watches"
            />
          </Box>
        </Stack>
      </Box>

      {/* 4th div  */}

      <Box>
        <Text fontWeight={"bold"} fontSize="25px">
          {" "}
          SPRING SHOP{" "}
        </Text>
        <Text my={4} fontSize="20px">
          {" "}
          Find the key pieces for a cool summer wardrobe{" "}
        </Text>
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        m="auto"
        w={"95%"}
        gap={5}
      >
        <Box>
          <Image src="http://staticawsy.yepme.com/images/summer_fashion_14june.jpg" />
        </Box>

        <Stack direction={"row"} m="auto" gap={5}>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/women_dresses_jumpsuits_10oct17.gif"
              alt="women-dresses"
            />
          </Box>
          <Box>
            <Image
              src="http://staticawsy.yepme.com/images/activewear_10oct17.gif"
              alt="activewear"
            />
          </Box>
        </Stack>
      </Stack>

      {/* last div  */}

      <Box mt={10}>
        <Text fontWeight={"bold"} fontSize="25px">
          {" "}
          STYLE FEATURE{" "}
        </Text>
        <Text my={4} fontSize="20px">
          Our Latest Videos, Trends, Fashion Editorials & More!{" "}
        </Text>
      </Box>

      <Stack direction={{base:"column" , md:"row"}} w="95%" margin="auto" justifyContent={"center"}>
        <Box w={{base:"90%", md:"50%"}} m="auto">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/ZId7sehdFoI"
            title="Spring Summer Collection TVC - Unreasonably Fashionable TV Ad by Yepme"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box>
          <Image
            src="http://staticawsy.yepme.com/images/STYLE-FEATURE_9FEB.jpg"
            alt="style"
          />
        </Box>
      </Stack>
    </Box>
  );
}
