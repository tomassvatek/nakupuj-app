import { Heading, SimpleGrid } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getTitle } from '../../utils/getTitle'
import Account from '../../components/Account';
import { userData } from '../../constants';
import React from 'react'

import { ButtonGroup } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  SubmitButton,
} from "formik-chakra-ui";
import * as Yup from "yup";

const initialValues = {
  ...userData,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Jméno je povinné'),
  lastName: Yup.string().required('Příjmení je povinné'),
  email: Yup.string().email('Zadejte správný e-mail').required('E-mail je povinný'),
});


const Orders: NextPage = () => {
  const handleSubmit = () => {
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <main>
          <Head>
            <title>{getTitle('Nastavení účtu')}</title>
          </Head>
          <Account>
            <Heading pt={2} pb={4}>Nastavení účtu</Heading>
            <SimpleGrid columns={2} spacing={5}>
              <InputControl name="firstName" label="Jméno" />
              <InputControl name="lastName" label="Příjmení" />
              <InputControl name="email" label="E-mail" />
              <InputControl name="phone" label="Telefonní číslo" />
            </SimpleGrid>
            <ButtonGroup py={4}>
              <SubmitButton>Uložit</SubmitButton>
            </ButtonGroup>
          </Account>
        </main>
      )}
    </Formik>
  )
}

export default Orders
