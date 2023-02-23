import { Button, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const Menu1 = ({gen}) => {
  return (
    <div style={{border:"1px solid black"}}>
        <Menu>
  <MenuButton as={Button} colorScheme='black'>
    {gen}
  </MenuButton>
  <Flex>
  <MenuList>
    <MenuGroup color={'black'} title='T-Shirts'>
      <MenuItem color={'black'}>Tees</MenuItem>
      <MenuItem color={'black'}>Polos </MenuItem>
      <MenuItem color={'black'}>Henley Tees </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup color={'black'} title='Shirts'>
      <MenuItem color={'black'}>party wear Shirts</MenuItem>
      <MenuItem color={'black'}>printed Shirts</MenuItem>
      <MenuItem color={'black'}>Premium Shirts</MenuItem>
      <MenuItem color={'black'}>Kurta Shirts</MenuItem>
      <MenuItem color={'black'}>Denim Shirts</MenuItem>
      <MenuItem color={'black'}>Solid Shirts</MenuItem>
      <MenuItem color={'black'}>Checks Shirts</MenuItem>
    </MenuGroup>
  </MenuList>


  {/* <MenuList>
    <MenuGroup color={'black'} title='T-Shirts'>
      <MenuItem color={'black'}>Tees</MenuItem>
      <MenuItem color={'black'}>Polos </MenuItem>
      <MenuItem color={'black'}>Henley Tees </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup color={'black'} title='Shirts'>
      <MenuItem color={'black'}>party wear Shirts</MenuItem>
      <MenuItem color={'black'}>printed Shirts</MenuItem>
      <MenuItem color={'black'}>Premium Shirts</MenuItem>
      <MenuItem color={'black'}>Kurta Shirts</MenuItem>
      <MenuItem color={'black'}>Denim Shirts</MenuItem>
      <MenuItem color={'black'}>Solid Shirts</MenuItem>
      <MenuItem color={'black'}>Checks Shirts</MenuItem>
    </MenuGroup>
  </MenuList> */}
  </Flex>
  
</Menu>
    </div>
  )
}

export default Menu1
