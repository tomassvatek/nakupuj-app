import { Box, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallToActionWithAnnotation from '../components/Hero'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import { getTitle } from '../utils/getTitle'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle()}</title>
      </Head>

      {/* <CallToActionWithAnnotation /> */}

      <Box p={4}>
        <Heading>Domovská stránka</Heading>
        <Slider />
      </Box>
    </main>
  )
}

export default Home
