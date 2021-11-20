import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import BreadcrumbComponent from "../../components/Breadcrumb";
import CartItemList from "../../components/CartItemList";
import { products } from "../../constants";
import { ICartItem } from "../../types";
import { getTitle } from "../../utils/getTitle";

const fakeData: ICartItem[] = products.map((item, index) => ({
  product: item,
  id: index,
  quantity: 1,
}));

const Cart: NextPage = () => {
  return (
    <Box px="20" py="15">
      <Head>
        <Heading>{getTitle("Košík")}</Heading>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={["index", "cart-full"]} />
        <Heading mb="5">Plný košík</Heading>
        <CartItemList items={fakeData} />
      </Box>
    </Box>
  );
};

export default Cart;
