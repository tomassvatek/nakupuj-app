import { Center, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getTitle } from '../../utils/getTitle'
import Account from '../../components/Account';

const Orders: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Historie objednávek')}</title>
      </Head>

      <Account>
        <Heading pt={2}>Historie objednávek</Heading>
        <Center w="100%" h={200}>
          <Heading color="gray.400">Nemáte žádné objednávky</Heading>
        </Center>
      </Account>
    </main>
  )
}

export default Orders
