import { Box, Checkbox,  Stack,  Text } from '@chakra-ui/react'
import React from 'react'

const SideBar = () => {
  return (
    <Stack  >

<Text textAlign={"center"} fontWeight="bold" fontSize={"25px"} my={5} > REFINE BY</Text>


{/* //size checkboxes  */}
<Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>Size</Text>

<Box display={"flex"} justifyContent="space-around">

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="sizes" value="36" />
      <label for="36">36</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="38" />
      <label for="38">38</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="40" />
      <label for="40">40</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="42" />
      <label for="42">42</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="44" />
      <label for="44">44</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="46" />
      <label for="46">46</label>
    </Box>
    
 
</Box>

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="sizes" value="XS" />
      <label for="XS">XS</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="S" />
      <label for="S">S</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="M" />
      <label for="M">M</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="L" />
      <label for="L">L</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="XL" />
      <label for="XL">XL</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="sizes" value="XXL" />
      <label for="XXL">XXL</label>
    </Box>
    
 
</Box>


</Box>

</Box>


{/* price checkbox  */}

<Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>Price </Text>

<Box >

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="price" value="Below Rs 500" />
      <label for="Below Rs 500">Below Rs 500</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="price" value="Rs 500-Rs 1000" />
      <label for="Rs 500-Rs 1000">Rs 500-Rs 1000</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="price" value="Rs 1000-Rs 1500" />
      <label for="Rs 1000-Rs 1500">Rs 1000-Rs 1500</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="price" value="Rs 1500-Rs 2000" />
      <label for="Rs 1500-Rs 2000">Rs 1500-Rs 2000</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="price" value="Above Rs 2000" />
      <label for="Above Rs 2000">Above Rs 2000</label>
    </Box>
    
 
</Box>




</Box>

</Box>



{/* colour checkbox  */}

<Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>Color </Text>

<Box display={"flex"} justifyContent="space-around">

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme={'blackAlpha'} value="Black" />
      <label for="Black">Black</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme={'gray'} value="Gray" />
      <label for="Gray">Gray</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='red' value="Red" />
      <label for="Red">Red</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='yellow' value="Yellow" />
      <label for="Yellow">Yellow</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='blue' value="Blue" />
      <label for="Blue">Blue</label>
    </Box>
    
 
</Box>

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme={'green'} value="green" />
      <label for="green">green</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme={'orange'} value="Orange" />
      <label for="Orange">Orange</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='teal' value="Teal" />
      <label for="Teal">Teal</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='pink' value="Pink" />
      <label for="Pink">Pink</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="colours" colorScheme='purple' value="Purple" />
      <label for="Purple">Purple</label>
    </Box>
    
 
</Box>


</Box>

</Box>


{/* material checkbox   */}

<Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>Material </Text>

<Box >

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="material" value="Cotton" />
      <label for="Cotton">Cotton</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Rayon" />
      <label for="Rayon">Rayon</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Polyester" />
      <label for="Polyester">Polyester</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Naylon" />
      <label for="Naylon">Naylon</label>
    </Box>
   
    
 
</Box>




</Box>

</Box>


{/* occassion checkbox   */}

<Box boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>Occassion </Text>

<Box >

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="material" value="Casual" />
      <label for="Casual">Casual</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Party" />
      <label for="Party">Party</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Formal" />
      <label for="Formal">Formal</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="Semi Formal" />
      <label for="Semi Formal">Semi Formal</label>
    </Box>
   
    
 
</Box>




</Box>

</Box>


{/* Brand checkbox   */}

<Box  boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" w={"90%"} m="auto" px={5}  pb={5}>

<Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}> Brand </Text>

<Box >

<Box textAlign={"left"} >
    <Box>
      <Checkbox mr={3}  name="material" value="van-heusen" />
      <label for="van-heusen">van-heusen</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="levis" />
      <label for="levis">levis</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="yepme" />
      <label for="yepme">yepme</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="mufti" />
      <label for="mufti">mufti</label>
    </Box>
    <Box>
      <Checkbox mr={3}  name="material" value="zara" />
      <label for="zara">zara</label>
    </Box>
  

</Box>




</Box>

</Box>





    </Stack>
  )
}

export default SideBar