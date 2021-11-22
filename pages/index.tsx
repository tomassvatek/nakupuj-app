import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToActionWithAnnotation from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import styles from '../styles/Home.module.css'
import { getTitle } from '../utils/getTitle'
import { uzeniny } from '../constants';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle()}</title>
      </Head>

      {/* <CallToActionWithAnnotation /> */}

      <Box p={4} ml={20}>
        <HStack>
          <Heading>Všechny produkty</Heading>
          <Text as="u">Zobrazit více</Text>
        </HStack>
        <ProductSlider/>
        <HStack>
          <Heading>{uzeniny.name}</Heading>
          <Text as="u">Zobrazit více</Text>
        </HStack>
        <ProductSlider category={uzeniny.id}/>
        <HStack>
          <Heading>Novinky</Heading>
          <Text as="u">Zobrazit více</Text>
        </HStack>
        <ProductSlider onlyNew={true}/>
      </Box>
    </main>
  )
}

export default Home
