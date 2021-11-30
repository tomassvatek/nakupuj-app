import { Box, Container, HStack, Stack } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useMemo } from "react";
import { getTitle } from "../../utils/getTitle";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import CartNavigation from '../../components/CartNavigation';
import BreadcrumbComponent from '../../components/Breadcrumb';
import { InputControl } from 'formik-chakra-ui';
import { userData } from '../../constants';

import * as Yup from 'yup';
import useLocalStorage from '../../hooks/useLocalStorage';

export const validationSchema = Yup.object({
  // firstName: Yup.string(),
  // lastName: Yup.string(),
  email: Yup.string().email('Vyplňte správný e-mail').required('Vyplňte e-mail'),
  phone: Yup.string().required('Vyplňte telefonní číslo'),
});

const Contact: NextPage = () => {
  const [isLoggedIn] = useLocalStorage('login', '');
  const router = useRouter();
  const initialValues = useMemo(() => isLoggedIn ? { ...userData } : { email: '', phone: '' }, [isLoggedIn]);

  const handleSubmit = () => {
    router.push('/cart/payment');
  }

  return (
    <main>
      <Head>
        <title>{getTitle("Kontaktní údaje")}</title>
      </Head>

      <Container maxW={'6xl'} p={4}>
        <BreadcrumbComponent items={['index', 'cart']} />

        <CartNavigation activeIndex={1} />
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
                <Box mb="4">
                  <Stack spacing={4}>
                    <HStack>
                      <InputControl name="firstName" label="Jméno" />
                      <InputControl name="lastName" label="Příjmení" />
                    </HStack>

                    <InputControl name="email" label="E-mail" />
                    <InputControl name="phone" label="Telefonní číslo" />
                  </Stack>
                </Box>

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
                      Na dopravu a platbu
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

export default Contact;
