import { Container } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getTitle } from "../../utils/getTitle";
import { useCart } from "../../hooks/useCart";
import CartNavigation from '../../components/CartNavigation';
import BreadcrumbComponent from '../../components/Breadcrumb';

const Payment: NextPage = () => {
  const { emptyCart } = useCart();

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
