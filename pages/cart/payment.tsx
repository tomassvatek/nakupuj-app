import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getTitle } from "../../utils/getTitle";
import Address from "./delivery/address";
import PaymentMethod from "./delivery/paymentMethod";
import { useCart } from "../../hooks/useCart";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { validationSchema } from './formSchema';

const initialValues = {
  cardNumber: '',
  expiration: '',
  cvv: '',
  deliveryDay: 'Dnes',
  deliveryTime: '0',
  deliveryType: '1',
};

const Payment: NextPage = () => {
  const router = useRouter();
  const { cartTotal, emptyCart } = useCart();
  const handleSubmit = () => {
    emptyCart();
    router.push('/cart/delivery/success');
  }

  return (
    <main>
      <Head>
        <title>{getTitle("Doprava a platba")}</title>
      </Head>

      <Container maxW={'4xl'} py={12}>
        <Heading mb={4}>Doprava a platba</Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Address />
                <PaymentMethod totalAmount={cartTotal} />

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <NextLink href="/cart">
                      <Button size="lg">Zpět na košík</Button>
                    </NextLink>

                    <Button type="submit" size="lg" colorScheme="green">
                      Dokončit nákup
                    </Button>
                  </Box>
                </Box>
              </form>
            )
          }}
        </Formik>

      </Container>
    </main>
  );
};

export default Payment;
