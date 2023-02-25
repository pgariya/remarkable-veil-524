import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SideBar = ({ filterdata, setfilterdata }) => {

  let [brandState, setbrandState] = useState({
    "van-heusen": false,
    "levis": false,
    "yepme": false,
    "mufti": false,
    "zara": false,
  });

  let handleBrand = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, brand: `${e.target.name}` })
      : setfilterdata({ ...filterdata, brand: "" });

    //  e.target.checked ?  setbrandState({  ...`${brandState}`, `${e.target.name}` : true }) : 
  };

  let handleOccassion = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, occassion: `${e.target.value}` })
      : setfilterdata({ ...filterdata, occassion: "" });
  };

  let handleColor = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, color: `${e.target.value}` })
      : setfilterdata({ ...filterdata, color: "" });
  };

  let handleMaterial = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, material: `${e.target.value}` })
      : setfilterdata({ ...filterdata, material: "" });
  };

  let handleSize = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, size: `${e.target.value}` })
      : setfilterdata({ ...filterdata, size: "" });
  };

  let handlePrice = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, price: `${e.target.value}` })
      : setfilterdata({ ...filterdata, price: "" });
  };

  useEffect(() => {}, [filterdata]);

  console.log(filterdata, "branddddd");

  return (
    <Stack>
      <Text textAlign={"center"} fontWeight="bold" fontSize={"25px"} my={5}>
        {" "}
        REFINE BY
      </Text>

      {/* //size checkboxes  */}
      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Size
        </Text>

        <Box display={"flex"} justifyContent="space-around">
          <Box textAlign={"left"}>
            <Box>
              <Checkbox mr={3} name="sizes" value="36" onChange={handleSize} />
              <label for="36">36</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="38" onChange={handleSize} />
              <label for="38">38</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="40" onChange={handleSize} />
              <label for="40">40</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="42" onChange={handleSize} />
              <label for="42">42</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="44" onChange={handleSize} />
              <label for="44">44</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="46" onChange={handleSize} />
              <label for="46">46</label>
            </Box>
          </Box>

          <Box textAlign={"left"}>
            <Box>
              <Checkbox mr={3} name="sizes" value="XS" onChange={handleSize} />
              <label for="XS">XS</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="S" onChange={handleSize} />
              <label for="S">S</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="M" onChange={handleSize} />
              <label for="M">M</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="L" onChange={handleSize} />
              <label for="L">L</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="XL" onChange={handleSize} />
              <label for="XL">XL</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="XXL" onChange={handleSize} />
              <label for="XXL">XXL</label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* price checkbox  */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Price{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="price"
                value="Below Rs 500"
                onChange={handlePrice}
              />
              <label for="Below Rs 500">Below Rs 500</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="price"
                value="Rs 500-Rs 1000"
                onChange={handlePrice}
              />
              <label for="Rs 500-Rs 1000">Rs 500-Rs 1000</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="price"
                value="Rs 1000-Rs 1500"
                onChange={handlePrice}
              />
              <label for="Rs 1000-Rs 1500">Rs 1000-Rs 1500</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="price"
                value="Rs 1500-Rs 2000"
                onChange={handlePrice}
              />
              <label for="Rs 1500-Rs 2000">Rs 1500-Rs 2000</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="price"
                value="Above Rs 2000"
                onChange={handlePrice}
              />
              <label for="Above Rs 2000">Above Rs 2000</label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* colour checkbox  */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Color{" "}
        </Text>

        <Box display={"flex"} justifyContent="space-around">
          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"blackAlpha"}
                value="black"
                onChange={handleColor}
              />
              <label for="black">Black</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"gray"}
                value="gray"
                onChange={handleColor}
              />
              <label for="gray">Gray</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="red"
                value="red"
                onChange={handleColor}
              />
              <label for="red">Red</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="yellow"
                value="yellow"
                onChange={handleColor}
              />
              <label for="yellow">Yellow</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="blue"
                value="blue"
                onChange={handleColor}
              />
              <label for="blue">Blue</label>
            </Box>
          </Box>

          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"green"}
                value="green"
                onChange={handleColor}
              />
              <label for="green">green</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"orange"}
                onChange={handleColor}
                value="orange"
              />
              <label for="orange">Orange</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="teal"
                value="teal"
                onChange={handleColor}
              />
              <label for="teal">Teal</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="pink"
                value="pink"
                onChange={handleColor}
              />
              <label for="pink">Pink</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="purple"
                onChange={handleColor}
                value="purple"
              />
              <label for="purple">Purple</label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* material checkbox   */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Material{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="cotton"
                onChange={handleMaterial}
              />
              <label for="cotton">Cotton</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="rayon"
                onChange={handleMaterial}
              />
              <label for="rayon">Rayon</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="polyester"
                onChange={handleMaterial}
              />
              <label for="polyester">Polyester</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="naylon"
                onChange={handleMaterial}
              />
              <label for="naylon">Naylon</label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* occassion checkbox   */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Occassion{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="casual"
                onChange={handleOccassion}
              />
              <label for="casual">Casual</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="party"
                onChange={handleOccassion}
              />
              <label for="party">Party</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="formal"
                onChange={handleOccassion}
              />
              <label for="formal">Formal</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="semi-formal"
                onChange={handleOccassion}
              />
              <label for="semi-formal">Semi Formal</label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Brand checkbox   */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          {" "}
          Brand{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                // name="brand"
                checked={brandState["van-heusen"] }
                name="van-heusen"
                onChange={handleBrand}
              />
              <label for="van-heusen">van-heusen</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                // name="brand"
                checked={brandState.levis}
                name="levis"
                onChange={handleBrand}
              />
              <label for="levis">levis</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                // name="brand"
                checked={brandState.yepme}
                name="yepme"
                onChange={handleBrand}
              />
              <label for="yepme">yepme</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                // name="brand"
                checked={brandState.mufti}
                name="mufti"
                onChange={handleBrand}
              />
              <label for="mufti">mufti</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                // name="brand"
                checked={brandState.zara}
                name="zara"
                onChange={handleBrand}
              />
              <label for="zara">zara</label>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default SideBar;
