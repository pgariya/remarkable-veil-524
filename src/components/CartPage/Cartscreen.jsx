import React, { useEffect, useState } from "react";
import "./Cartscreen.css";
import CartPage from "./CartPage";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Toast,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/config";
import { Loading } from "../Loading";
import { RUPEES_SYMBOL } from "../../constants/constants";
import {
  AUTO,
  FILL_PARENT,
  GREEN,
  LINE_THROUGH,
  ORANGE,
  RED,
  UNDERLINE,
} from "../../constants/typography";
import getFutureDate from "../../scripts/futureDate";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Payment from "../CheckoutPage/Payment";
import { Link } from "react-router-dom";
import { CART_UPDATE } from "../../Redux/cart/cart.types";
const Cartscreen = () => {
  const { token,email } = useSelector((state) => state.authReducer);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refesh, setRefresh] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalSavings, setTotalSaving] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let getCartData = async () => {
      setLoading(true);
      let res = await axios({
        method: "get",
        url: BASE_URL + `/cart`,
        headers: {
          Authorization: token,
        },
      });


      console.log(res);
      if (res.data.status == 1) {
        setCart(res.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("something went wrong");
      }

      dispatch({type:CART_UPDATE})
    };


    getCartData();
  }, [refesh]);

  

  useEffect(() => {
    let total = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);

    setCartTotal(total);

    let totalsavings = cart.reduce((acc, el) => {
      return acc + el.originalPrice * el.quantity;
    }, 0);

    setCartTotal(total);

    setTotalSaving(totalsavings - total);
  }, [cart]);

  if (loading) return <Loading />;

  return (
    <VStack w={FILL_PARENT}>
     
      <div style={{ marginTop: "200px" }}  className="cartscreen">
        <div className="cartscreen_left">
        <Text mb={50} fontSize={"3xl"} fontWeight="bold">
          Shopping Cart
        </Text>
          {cart.length > 0 ? (
            cart?.map((el) => <CartPage setRefresh={setRefresh} {...el} />)
          ) : (
            <VStack>
              <Image
                w={"300px"}
                m={AUTO}
                src={
                  "https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1677333680~exp=1677334280~hmac=e654070bc4ba550586903ee7739ffd1597315f1e89338b7d1730be4f788a5900"
                }
              />

              <Heading>
                Your cart is Empty!{" "}
                <Link style={{ color: ORANGE }} to={"/"}>
                  Shop now
                </Link>
              </Heading>
            </VStack>
          )}
        </div>
        <div className="cartscreen_right">
          <div
            style={{ display: cart?.length > 0 ? "block" : "none" }}
            className="cartscreen_info"
          >
            <VStack>
              <HStack gap={2}>
                <p>Subtotal({cart.length}) items</p>
                <p>:</p>
                <p style={{ color: GREEN }}>
                  {RUPEES_SYMBOL + " " + cartTotal}
                </p>
              </HStack>
              <HStack gap={2}>
                <p>Total Savings</p>
                <p>:</p>
                <p style={{ color: RED }}>
                  {"-" + RUPEES_SYMBOL + " " + totalSavings}
                </p>
              </HStack>
              <HStack gap={2}>
                <p>Deliver on</p>
                <p>:</p>
                <p style={{ color: GREEN }}>{getFutureDate(Date.now(), 3)}</p>
              </HStack>
            </VStack>

            <>
              <button onClick={onOpen}>Proceed to Checkout</button>

              <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Payment page</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Payment
                      cart={cart}
                      cartTotal={cartTotal}
                      token={token}
                      email={email}
                      totalSavings={totalSavings}
                    />
                  </ModalBody>
                  <ModalFooter>
            <Button colorScheme={ORANGE}  onClick={onClose}>
              Cancel
            </Button>
          
          </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </div>
        </div>
      </div>

      <Box h={100} w={FILL_PARENT}></Box>
    </VStack>
  );
};

export default Cartscreen;
