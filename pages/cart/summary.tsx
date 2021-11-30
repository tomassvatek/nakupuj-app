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
  deliveryTime: '0',
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
        <title>{getTitle("Souhrn objednávky")}</title>
      </Head>

      <Container maxW={'6xl'} p={4}>
        <BreadcrumbComponent items={['index', 'cart']} />

        <CartNavigation activeIndex={3} />
      </Container>

      <Container maxW={'4xl'} py={5}>
        Souhrn objednávky

      </Container>
    </main>
  );
};

export default Payment;
