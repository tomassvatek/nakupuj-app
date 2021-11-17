import { Box, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbComponent from '../../components/Breadcrumb'
import CallToActionWithAnnotation from '../../components/Hero'
import { getTitle } from '../../utils/getTitle'

const Settings: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Nastavení účtu')}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index', 'settings']} />
        <Heading>Nastavení účtu</Heading>
      </Box>
    </main>
  )
}

export default Settings
