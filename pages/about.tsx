import { Box, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbComponent from '../components/Breadcrumb'
import CallToActionWithAnnotation from '../components/Hero'
import { getTitle } from '../utils/getTitle'

const About: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('O nás')}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index', 'about']} />
        <Heading>O nás</Heading>
      </Box>
    </main>
  )
}

export default About
