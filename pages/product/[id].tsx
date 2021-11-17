import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import NextLink from 'next/link';
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import BreadcrumbComponent from '../../components/Breadcrumb'
import { getTitle } from '../../utils/getTitle'
import { products } from '../../constants';

const product = products[0];

const ProductDetail: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle(product.title)}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index']}>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/product/123">{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbComponent>

        <Container maxW={'6xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                rounded={'md'}
                alt={`Obrázek ${product.title}`}
                src={product.imageURL}
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4}>
              {product.isNew && (
                <Text
                  textTransform={'uppercase'}
                  color={'blue.400'}
                  fontWeight={600}
                  fontSize={'sm'}
                  bg={useColorModeValue('blue.50', 'blue.900')}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'md'}>
                  Novinka
                </Text>
              )}
              <Heading>{product.title}</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                {product.description}
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  )
}

export default ProductDetail
