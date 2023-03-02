import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SlideShow from "../components/Homepage/SlideShow";
import { CONTAINER } from "../constants/constants";
import { BOLD, FILL_PARENT, R1, R2, R3, R4 } from "../constants/typography";
import "../styles/styles.css";

export default function Homepage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box width={FILL_PARENT} m={"auto"} mt={CONTAINER}>
      {/* 1st box  */}
      <Stack
        direction={{ base: "column", md: "row" }}
        w={"95%"}
        gap={5}
        m="auto"
      >
        <SlideShow  />

        <Stack
          // w={{ base: "95%", md: "40%" }}
          direction={{ base: "row", md: "column" }}
          gap={{ base: "5", md: "2" }}
          justifyContent="center"
        >
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401197/samples/styluxe/men_shoes_rhs1_16march_heqqon.jpg"
              alt="shoes"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401219/samples/styluxe/men1_tees_rhs1_feb18_qaenbd.jpg"
              alt="t-Shirt"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
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
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401309/samples/styluxe/square_shirts_09022018_xrr8jy.jpg"
              alt="shirt"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </Box>

        <Box>
          <Link to={"/products?category=top"}>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401326/samples/styluxe/square-tops_09022018_iqjqkg.jpg"
              alt="top"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </Box>

        <Box>
        <Link to={"/products?category=Kurtis"}>
          <Image
            src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401343/samples/styluxe/square_kurtis_09022018_mvttwk.jpg"
            alt="kurties"
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
          />
          </Link>
        </Box>

        <Box>
        <Link to={"/products?category=party-wear"}>

          <Image
            src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401360/samples/styluxe/square_partywear_09022018_i7lyc1.jpg"
            alt="mens-partywear"
            transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
            </Link>
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
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401377/samples/styluxe/men_bottomwear_10oct17_o0csg1.jpg"
              alt="men-bottomwear"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>

          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401588/samples/styluxe/men_watches_10oct17_p9kwsh.jpg"
              alt="men-watches"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
        </Stack>

        <Stack gap={5} m={"auto"}>
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401611/samples/styluxe/center3-4-17_kywcqt.jpg"
              alt="yepme-logotype"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>

          <Box my={10}>
            <Text fontSize={"25px"} fontWeight={BOLD}>
              STYLE ALERT
            </Text>
          </Box>

          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401652/samples/styluxe/center_images_winterwear_10oct17_qavqzj.gif"
              alt="winter-wear"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
        </Stack>

        <Stack m={"auto"} gap={4}>
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401685/samples/styluxe/women_bottomwear_10oct17_tbdxyo.jpg"
              alt="women-bottomwear"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>

          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401702/samples/styluxe/women_watches_10oct17_huj2lp.jpg"
              alt="women-watches"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
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
        <Box overflow={"hidden"}>
          <Image src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401716/samples/styluxe/summer_fashion_14june_cjx5e1.jpg"  transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}/>
        </Box>

        <Stack direction={"row"} m="auto" gap={5}>
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401737/samples/styluxe/women_dresses_jumpsuits_10oct17_fibfya.gif"
              alt="women-dresses"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Box>
            <Image
              src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401748/samples/styluxe/activewear_10oct17_eu7t2l.gif"
              alt="activewear"
              transition={"transform 2s"}
            _hover={{ transform: "scale(1.1)" }}
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

      <Stack
        direction={{ base: "column", md: "row" }}
        w="95%"
        margin="auto"
        justifyContent={"center"}
      >
        <Box w={{ base: "90%", md: "50%" }} m="auto">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/ZId7sehdFoI"
            title="Spring Summer Collection TVC - Unreasonably Fashionable TV Ad by Yepme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            
          ></iframe>
        </Box>
        <Box>
          <Image
            src="https://res.cloudinary.com/ducgyycpy/image/upload/v1677401768/samples/styluxe/STYLE-FEATURE_9FEB_zzueyi.jpg"
            alt="style"
          />
        </Box>
      </Stack>
    </Box>
  );
}
