import { Box, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbComponent from '../../components/Breadcrumb'
import CallToActionWithAnnotation from '../../components/Hero'
import { getTitle } from '../../utils/getTitle'

const Payment: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Doprava a platba')}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index', 'cart-payment']} />
        <Heading>Doprava a platba</Heading>
      </Box>
    </main>
  )
}

export default Payment
