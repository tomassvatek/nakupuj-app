import { Center, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getTitle } from '../../utils/getTitle'
import Account from '../../components/Account';

const PaymentMethods: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Platební metody')}</title>
      </Head>

      <Account>
        <Heading pt={2}>Platební metody</Heading>
        <Center w="100%" h={200}>
          <Heading color="gray.400">Nemáte žádné platební metody</Heading>
        </Center>
      </Account>
    </main>
  )
}

export default PaymentMethods
