import React from "react"
import { Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Stack, Text, useDisclosure } from "@chakra-ui/react"
import {ImMenu} from "react-icons/im"


function DrawerPro({ filter, setFilter })  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleCheckboxChange = (event) => {
      const { name, value, checked } = event.target;
      setFilter(prevFilter => ({
        ...prevFilter,
        [name]: {
          ...prevFilter[name],
          [value]: checked,
        },
      }));
    };



  
    return (
      <Box  >
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} >
         <ImMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
          
  
            <DrawerBody>
              
            <Stack>
      <Text textAlign={"center"} fontWeight="bold" fontSize={"25px"} my={5}>
        {" "}
        REFINE BY
      </Text>

      {/* //size checkboxes  */}
      {/* <Box
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
      </Box> */}

      {/* price checkbox  */}

      {/* <Box
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
      </Box> */}

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
              <input
            type="checkbox"
            name="color"
            value="black"
            checked={filter.color.black}
            onChange={handleCheckboxChange}
          />
              <label for="black">Black</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="gray"
            checked={filter.color.gray}
            onChange={handleCheckboxChange}
          />
              <label for="gray">Gray</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="red"
            checked={filter.color.red}
            onChange={handleCheckboxChange}
          />
              <label for="red">Red</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="yellow"
            checked={filter.color.yellow}
            onChange={handleCheckboxChange}
          />
              <label for="yellow">Yellow</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="blue"
            checked={filter.color.blue}
            onChange={handleCheckboxChange}
          />
              <label for="blue">Blue</label>
            </Box>
          </Box>

          <Box textAlign={"left"}>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="green"
            checked={filter.color.green}
            onChange={handleCheckboxChange}
          />
              <label for="green">green</label>
            </Box>
            <Box>
             <input
            type="checkbox"
            name="color"
            value="orange"
            checked={filter.color.orange}
            onChange={handleCheckboxChange}
          />
              <label for="orange">Orange</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="white"
            checked={filter.color.white}
            onChange={handleCheckboxChange}
          />
              <label for="white">White</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="color"
            value="pink"
            checked={filter.color.pink}
            onChange={handleCheckboxChange}
          />
              <label for="pink">Pink</label>
            </Box>
            <Box>
              
              <input
            type="checkbox"
            name="color"
            value="purple"
            checked={filter.color.purple}
            onChange={handleCheckboxChange}
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
             
               <input
            type="checkbox"
            name="material"
            value="cotton"
            checked={filter.material.cotton}
            onChange={handleCheckboxChange}
          />
              <label for="cotton">Cotton</label>
            </Box>
            <Box>
              
              <input
            type="checkbox"
            name="material"
            value="rayon"
            checked={filter.material.rayon}
            onChange={handleCheckboxChange}
          />
              <label for="rayon">Rayon</label>
            </Box>
            <Box>
             
               <input
            type="checkbox"
            name="material"
            value="polyester"
            checked={filter.material.polyester}
            onChange={handleCheckboxChange}
          />
              <label for="polyester">Polyester</label>
            </Box>
            <Box>
              
              <input
            type="checkbox"
            name="material"
            value="naylon"
            checked={filter.material.naylon}
            onChange={handleCheckboxChange}
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
          Occasion{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
            <input
            type="checkbox"
            name="occasion"
            value="casual"
            checked={filter.occasion.casual}
            onChange={handleCheckboxChange}
          />
              <label for="casual">Casual</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="occasion"
            value="party"
            checked={filter.occasion.party}
            onChange={handleCheckboxChange}
          />
              <label for="party">Party</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="occasion"
            value="formal"
            checked={filter.occasion.formal}
            onChange={handleCheckboxChange}
          />
              <label for="formal">Formal</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="occasion"
            value="semiformal"
            checked={filter.occasion.semiformal}
            onChange={handleCheckboxChange}
          />
              <label for="semiformal">Semi Formal</label>
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
              <input
                type="checkbox"
                name="brand"
                value="vanheusen"
                checked={filter.brand.vanheusen}
                onChange={handleCheckboxChange}
              />
              <label for="van-heusen">van-heusen</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="brand"
                value="levis"
                checked={filter.brand.levis}
                onChange={handleCheckboxChange}
              />
              <label for="levis">levis</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="brand"
                value="yepme"
                checked={filter.brand.yepme}
                onChange={handleCheckboxChange}
              />
              <label for="yepme">yepme</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="brand"
                value="mufti"
                checked={filter.brand.mufti}
                onChange={handleCheckboxChange}
              />
              <label for="mufti">mufti</label>
            </Box>
            <Box>
              <input
                type="checkbox"
                name="brand"
                value="zara"
                checked={filter.brand.zara}
                onChange={handleCheckboxChange}
              />
              <label for="zara">zara</label>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>


            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }


  export default DrawerPro