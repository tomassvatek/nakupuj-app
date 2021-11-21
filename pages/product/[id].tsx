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
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import ErrorPage from '../404'
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import NextLink from 'next/link';
import type { NextPage, GetServerSideProps } from 'next'
import { BsCartFill } from 'react-icons/bs'
import Head from 'next/head'
import BreadcrumbComponent from '../../components/Breadcrumb'
import { getTitle } from '../../utils/getTitle'
import { products } from '../../constants';
import type { IProduct } from '../../types';
import AddToCartConfirmation from '../../components/AddToCartConfirmation';
import { useCart } from '../../hooks/useCart';
import ChangeAmount, { ChangeAmountHandler } from '../../components/ChangeAmout';
import { useState } from 'react';

interface Props {
  product?: IProduct,
};

const ProductDetail: NextPage<Props> = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCart();
  const [amount, setAmount] = useState(1);
  
  const handleAmountChange: ChangeAmountHandler = (event) => {
    setAmount(event.value || 0);
  };
  
  if (!product) {
    return <ErrorPage />;
  }
  
  const variant = product.variants[0]!;
  const handleAddToCart: React.MouseEventHandler = () => {
    setAmount(1);
    addItem(variant, amount);
    onOpen();
  };

  return (
    <main>
      <Head>
        <title>{getTitle(product.title)}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index']}>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href={`/product/${product.id}`}>{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbComponent>

        <Container maxW={'6xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                rounded={'md'}
                alt={`Obrázek ${product.title}`}
                src={variant.imageURL}
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

              <ChangeAmount
                defaultValue={amount}
                value={amount}
                min={1}
                onAmoutChange={handleAmountChange}
              />

              <Button colorScheme="green" size="lg" mr={4} leftIcon={<BsCartFill />} onClick={handleAddToCart}>
                Přidat do košíku
              </Button>
              <AddToCartConfirmation
                variant={variant}
                onClose={onClose}
                isOpen={isOpen}
              />

              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor="gray.100"
                  />
                }>
              </Stack>
            </Stack>
          </SimpleGrid>

          {product.fullDescription && (
            <Container maxW={'6xl'} py={12}>
              <Text dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
            </Container>
          )}
        </Container>
      </Box>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string | undefined;

  let product = null;
  if (id) {
    const _id = parseInt(id, 10);
    product = products.find(p => p.id === _id) || null;
  }

  if (!product) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      product,
    },
  };
}

export default ProductDetail
