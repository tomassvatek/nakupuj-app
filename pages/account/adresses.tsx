import { Center, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getTitle } from '../../utils/getTitle'
import Account from '../../components/Account';

const Adresses: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Adresy')}</title>
      </Head>

      <Account>
        <Heading pt={2}>Adresy</Heading>
        <Center w="100%" h={200}>
          <Heading color="gray.400">Nemáte žádné adresy</Heading>
        </Center>
      </Account>
    </main>
  )
}

export default Adresses
