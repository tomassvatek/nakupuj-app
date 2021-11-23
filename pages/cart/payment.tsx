import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { getTitle } from "../../utils/getTitle";
import Address from "./delivery/address";
import PaymentMethod from "./delivery/paymentMethod";
import { useCart } from "../../hooks/useCart";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Payment: NextPage = () => {
  const { cartTotal, emptyCart } = useCart();

  return (
    <main>
      <Head>
        <title>{getTitle("Doprava a platba")}</title>
      </Head>

      <Container maxW={'4xl'} py={12}>
        <Heading mb={4}>Doprava a platba</Heading>
        <Address />
        <PaymentMethod totalAmount={cartTotal} />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box
            style={{
              padding: "0 2rem",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <NextLink href="/cart/index">
              <Button size="lg">Zpět na košík</Button>
            </NextLink>

            <NextLink href="/cart/delivery/success">
              <Button size="lg" onClick={emptyCart} colorScheme="green">
                Dokončit nákup
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Payment;
