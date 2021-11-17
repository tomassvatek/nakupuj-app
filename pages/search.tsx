import { Box, Heading, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbComponent from '../components/Breadcrumb'
import { getTitle } from '../utils/getTitle'

const Search: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Hledání')}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index', 'search']} />
        <Heading>Hledání</Heading>
      </Box>
    </main>
  )
}

export default Search
