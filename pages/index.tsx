import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToActionWithAnnotation from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import styles from '../styles/Home.module.css'
import { getTitle } from '../utils/getTitle'
import {napoje, products} from '../constants';
import React from "react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Categories from '../components/Categories'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <Box p={5}>
        <Categories/>
        <Heading fontSize="3xl">Všechny produkty</Heading>
        <ProductSlider />
        <Heading mt={5} fontSize="3xl">{napoje.name}</Heading>
        <ProductSlider category={napoje.id} />
        <Heading mt={5} fontSize="3xl">Novinky</Heading>
        <ProductSlider onlyNew={true} />
      </Box>
    </main>
  )
}

export default Home
