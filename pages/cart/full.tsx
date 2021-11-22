import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import CartItemList from "../../components/CartItemList";
import DeliveryOption from "../../components/DeliveryOption";
import DeliveryOptions from "../../components/DeliveryOptions";
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
    <Box px="20" pt="5" pb="20">
      <Head>
        <Heading>{getTitle("Košík")}</Heading>
      </Head>

      <Box p={4}>
        {/* <BreadcrumbComponent items={["index", "cart-full"]} /> */}
        <Heading mb="5">Plný košík</Heading>
        <CartItemList items={fakeData} />
        <Box pt="5">
          <Box pb="5">
            <Heading as="h2" size="lg" pb="1">
              Doporučené nákupy
            </Heading>
            <Text color="gray.500" fontSize="sm">
              Zde si můžete vybrat jiný nákup. Pokud se Vám nebude líbit, můžete
              se vrátit zpět na Váš výber.
            </Text>
          </Box>
          <DeliveryOptions />
          <Box pt="10" textAlign="right">
            <Button size="lg">Na dopravu a platbu</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
