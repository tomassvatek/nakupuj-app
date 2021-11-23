import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToActionWithAnnotation from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import styles from '../styles/Home.module.css'
import { getTitle } from '../utils/getTitle'
import { napoje } from '../constants';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <Box p={5}>
        <Heading fontSize="3xl">Všechny produkty</Heading>
        <ProductSlider />
        <Heading fontSize="3xl">{napoje.name}</Heading>
        <ProductSlider category={napoje.id} />
        <Heading fontSize="3xl">Novinky</Heading>
        <ProductSlider onlyNew={true} />
      </Box>
    </main>
  )
}

export default Home
