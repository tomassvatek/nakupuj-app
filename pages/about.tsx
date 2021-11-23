import { Box, Heading, Container, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BreadcrumbComponent from '../components/Breadcrumb'
import { getTitle } from '../utils/getTitle'

const About: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('O nás')}</title>
      </Head>

      <Container maxW={'6xl'} py={12}>
        <BreadcrumbComponent items={['index', 'about']} />
        
        <Heading pb={2}>O nás</Heading>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci, ex sequi dicta at veniam voluptatem nisi nihil inventore a necessitatibus vitae iste quibusdam, doloremque libero cumque fugiat ipsam commodi.
        </Text>
      </Container>
    </main>
  )
}

export default About
