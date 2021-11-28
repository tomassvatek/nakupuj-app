import { Box, Container, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import ProductSlider from '../components/ProductSlider'
import { getTitle } from '../utils/getTitle'
import { napoje } from '../constants';
import React from "react";
import Categories from '../components/Categories'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <Container maxW={{ base: '6xl', xl: '8xl' }} py={5}>
        <Categories />
        <Heading mt={5} fontSize="3xl">Všechny produkty</Heading>
        <ProductSlider />
        <Heading mt={5} fontSize="3xl">{napoje.name}</Heading>
        <ProductSlider category={napoje.id} />
        <Heading mt={5} fontSize="3xl">Novinky</Heading>
        <ProductSlider onlyNew={true} />
      </Container>
    </main>
  )
}

export default Home
