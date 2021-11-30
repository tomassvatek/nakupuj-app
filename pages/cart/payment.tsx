import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getTitle } from "../../utils/getTitle";
import Address from "../../components/delivery/address";
import PaymentMethod from "../../components/delivery/paymentMethod";
import { useCart } from "../../hooks/useCart";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { validationSchema } from '../../utils/formSchema';
import CartNavigation from '../../components/CartNavigation';
import BreadcrumbComponent from '../../components/Breadcrumb';

const initialValues = {
  cardNumber: '',
  expiration: '',
  cvv: '',
  deliveryDay: 'Dnes',
  deliveryTime: '7:00',
  deliveryType: '1',
  gps: '',
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

      <Container maxW={'6xl'} p={4}>
        <BreadcrumbComponent items={['index', 'cart']} />

        <CartNavigation activeIndex={2} />
      </Container>

      <Container maxW={'4xl'} py={5}>
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
                    <NextLink href="/cart/contact">
                      <Button size="lg">Zpět na kontaktní údaje</Button>
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
