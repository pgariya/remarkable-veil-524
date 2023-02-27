import { Badge, Button, Card, CardBody, Flex, HStack, Text, Wrap } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ADMIN, DEACTIVATE, SUPER_ADMIN, USER } from "../../../constants/constants";
import { FILL_PARENT, GREEN, LARGE, MEDIUM, SB, SMALL, YELLOW } from "../../../constants/typography";
import {FaAngleDown} from "react-icons/fa"
export default function AdminCard({ name, email,setRole,role }) {
  return (
    <Card w={FILL_PARENT}>
      <CardBody>
        <Flex justify={SB} w={FILL_PARENT}>
          <HStack gap={2}  >
            <Badge fontSize={LARGE} colorScheme={YELLOW}>{name}</Badge>
            <Badge fontSize={SMALL} colorScheme={GREEN}>{role}</Badge>
            <Wrap fontSize={{base:"8px",md:"12px",lg:"16px"}} padding={2}>{email}</Wrap>
          </HStack>
          <Menu>
            <MenuButton fontSize={{base:SMALL,sm:MEDIUM}} as={Button} rightIcon={<FaAngleDown />}>
              Role
            </MenuButton>
            <MenuList>
              <MenuItem display={role==USER?"none":"block"} onClick={()=>{
                setRole(USER,email)
              }}>User</MenuItem>
              <MenuItem display={role==ADMIN?"none":"block"}  onClick={()=>{
                setRole(ADMIN,email)
              }}>Admin</MenuItem>
              <MenuItem display={role==SUPER_ADMIN?"none":"block"}  onClick={()=>{
                setRole(SUPER_ADMIN,email)
              }}>Super Admin</MenuItem>
              <MenuItem display={role==DEACTIVATE?"none":"block"}  onClick={()=>{
                setRole(DEACTIVATE,email)
              }}>Deactivate</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardBody>
    </Card>
  );
}
