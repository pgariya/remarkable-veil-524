import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import React from "react";



const SideBar = ({ filterdata, setfilterdata }) => {
  
  let handleBrand = (e) => {
    console.log(e.target.checked);
    console.log(e.target.name + " " + e.target.value);
    // e.target.checked ? setbranddata({brand:  branddata.brand ?  `${branddata.brand} ${e.target.value}` : e.target.value }) : setbranddata({brand: `${branddata.brand}`.replace(e.target.value,"") })
    e.target.checked
      ? setfilterdata({ ...filterdata, brand: `${e.target.value}` })
      : setfilterdata({ ...filterdata, brand: "" });
  };

  let handleOccassion = (e) => {
    e.target.checked
      ? setfilterdata({ ...filterdata, occassion: `${e.target.value}` })
      : setfilterdata({ ...filterdata, occassion: "" });
  };

  let handleColor=(e)=>{
    e.target.checked
    ? setfilterdata({ ...filterdata, color: `${e.target.value}` })
    : setfilterdata({ ...filterdata, color: "" });
  }

  let handleMaterial=(e) =>{
    e.target.checked
    ? setfilterdata({ ...filterdata, material: `${e.target.value}` })
    : setfilterdata({ ...filterdata, material: "" });

  }

let handleSize=(e) =>{
  e.target.checked
  ? setfilterdata({ ...filterdata, size: `${e.target.value}` })
  : setfilterdata({ ...filterdata, size: "" });
}

let handlePrice=(e) =>{
  e.target.checked
  ? setfilterdata({ ...filterdata, price: `${e.target.value}` })
  : setfilterdata({ ...filterdata, price: "" });
}



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
              <Checkbox mr={3} name="sizes" value="36" onChange={handleSize}/>
              <label for="36">36</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="38" onChange={handleSize}/>
              <label for="38">38</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="40" onChange={handleSize}/>
              <label for="40">40</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="42" onChange={handleSize}/>
              <label for="42">42</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="44" onChange={handleSize}/>
              <label for="44">44</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="46" onChange={handleSize}/>
              <label for="46">46</label>
            </Box>
          </Box>

          <Box textAlign={"left"}>
            <Box>
              <Checkbox mr={3} name="sizes" value="XS" onChange={handleSize}/>
              <label for="XS">XS</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="S" onChange={handleSize}/>
              <label for="S">S</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="M" onChange={handleSize}/>
              <label for="M">M</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="sizes" value="L" onChange={handleSize}/>
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
              <Checkbox mr={3} name="price" value="Below Rs 500"  onChange={handlePrice}/>
              <label for="Below Rs 500">Below Rs 500</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="price" value="Rs 500-Rs 1000" onChange={handlePrice}/>
              <label for="Rs 500-Rs 1000">Rs 500-Rs 1000</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="price" value="Rs 1000-Rs 1500" onChange={handlePrice}/>
              <label for="Rs 1000-Rs 1500">Rs 1000-Rs 1500</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="price" value="Rs 1500-Rs 2000" onChange={handlePrice}/>
              <label for="Rs 1500-Rs 2000">Rs 1500-Rs 2000</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="price" value="Above Rs 2000" onChange={handlePrice}/>
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
                value="Black"
                onChange={handleColor}
              />
              <label for="Black">Black</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"gray"}
                value="Gray"
                onChange={handleColor}
              />
              <label for="Gray">Gray</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="colours" colorScheme="red" value="Red"  onChange={handleColor}/>
              <label for="Red">Red</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="yellow"
                value="Yellow" onChange={handleColor}
              />
              <label for="Yellow">Yellow</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="colours" colorScheme="blue" value="Blue"  onChange={handleColor}/>
              <label for="Blue">Blue</label>
            </Box>
          </Box>

          <Box textAlign={"left"}>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"green"}
                value="green" onChange={handleColor}
              />
              <label for="green">green</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme={"orange"} onChange={handleColor}
                value="Orange"
              />
              <label for="Orange">Orange</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="colours" colorScheme="teal" value="Teal"  onChange={handleColor}/>
              <label for="Teal">Teal</label>
            </Box>
            <Box>
              <Checkbox mr={3} name="colours" colorScheme="pink" value="Pink" onChange={handleColor} />
              <label for="Pink">Pink</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="colours"
                colorScheme="purple" onChange={handleColor}
                value="Purple"
              />
              <label for="Purple">Purple</label>
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
                value="Cotton"
                onChange={handleMaterial}
              />
              <label for="Cotton">Cotton</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="Rayon"
                onChange={handleMaterial}
              />
              <label for="Rayon">Rayon</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="Polyester"
                onChange={handleMaterial}
              />
              <label for="Polyester">Polyester</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="material"
                value="Naylon"
                onChange={handleMaterial}
              />
              <label for="Naylon">Naylon</label>
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
                value="Casual"
                onChange={handleOccassion}
              />
              <label for="Casual">Casual</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="Party"
                onChange={handleOccassion}
              />
              <label for="Party">Party</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="Formal"
                onChange={handleOccassion}
              />
              <label for="Formal">Formal</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="occassion"
                value="Semi Formal"
                onChange={handleOccassion}
              />
              <label for="Semi Formal">Semi Formal</label>
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
                name="brand"
                value="van-heusen"
                onChange={handleBrand}
              />
              <label for="van-heusen">van-heusen</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="brand"
                value="levis"
                onChange={handleBrand}
              />
              <label for="levis">levis</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="brand"
                value="yepme"
                onChange={handleBrand}
              />
              <label for="yepme">yepme</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="brand"
                value="mufti"
                onChange={handleBrand}
              />
              <label for="mufti">mufti</label>
            </Box>
            <Box>
              <Checkbox
                mr={3}
                name="brand"
                value="zara"
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
