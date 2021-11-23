import { Box, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { getTitle } from "../../utils/getTitle";
import Address from "./delivery/address";
import PaymentMethod from "./delivery/paymentMethod";
import {useCart} from "../../hooks/useCart";
import {Button} from "@chakra-ui/react";
import NextLink from "next/link";

const Payment: NextPage = () => {

    const {cartTotal} = useCart()

  return (
    <main>
      <Head>
        <title>{getTitle("Doprava a platba")}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={["index", "cart-payment"]} />
        <Heading>Doprava a platba</Heading>
        <Address />f
        <PaymentMethod totalAmount={cartTotal} />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "60%",
              padding: "0 2rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
              <NextLink href="/cart/delivery/success">
                  <Button size="lg">Dokončit nákup</Button>
              </NextLink>
          </div>
        </Box>
      </Box>
    </main>
  );
};

export default Payment;
