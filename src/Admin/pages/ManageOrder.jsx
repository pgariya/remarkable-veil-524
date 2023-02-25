import { Box, Flex, Image, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { BASE_URL } from "../../constants/config";
import { KURTIS, PARTY_WEAR, SHIRT } from "../../constants/constants";
import {
  AUTO,
  CENTER,
  FILL_PARENT,
  RIGHT,
  TOP,
} from "../../constants/typography";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Paginantion from "../components/Paginantion/Paginantion";
import OrderItem from "../components/OrderItem/OrderItem";

export default function ManageOrder() {
  const { token } = useSelector((state) => state.authReducer);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let res = await axios({
        method: "post",
        url: BASE_URL + `/order/admin?page=${page}`,
        headers: {
          Authorization: token,
        },
      });

      // console.log(res)

      if (res.data.status == 1) {
        setProduct(res.data.data);
        setTotalPage(res.data.count);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    getData();
  }, [page, refresh]);

  useEffect(() => {
    setPage(0);
  }, []);

  if (loading) return <Loading />;

  return (
    <Box padding={"8px 0px"} w={FILL_PARENT}>
      <TableContainer >
        <Table variant="striped" colorScheme="orange">
          <TableCaption>Filter products category wise</TableCaption>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>title</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Ordiginal Price</Th>
              <Th isNumeric>Stock left</Th>
              <Th >Address</Th>
              <Th isNumeric>Qty</Th>
              <Th>Status</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product?.map((el) => (
              <OrderItem key={el._id} setRefresh={setRefresh} {...el} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Paginantion
        key={page}
        page={page}
        setPage={setPage}
        divide={5}
        totalPage={totalPage}
      />
    </Box>
  );
}
