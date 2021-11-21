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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  AspectRatio,
  VStack,
  Badge,
  Spacer,
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
import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { formatPrice, formatWeight } from '../../utils/formatters';

interface Props {
  product?: IProduct,
};

const ProductDetail: NextPage<Props> = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCart();
  const [amount, setAmount] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);

  const handleAmountChange: ChangeAmountHandler = (event) => {
    setAmount(event.value || 0);
  };

  if (!product || !selectedVariant) {
    return <ErrorPage />;
  }

  const handleAddToCart: React.MouseEventHandler = () => {
    setAmount(1);
    addItem(selectedVariant, amount);
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
                src={selectedVariant.imageURL}
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4}>
              {product.isNew && (
                <Text>
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    Novinka
                  </Badge>
                </Text>
              )}
              <Heading>{product.title}</Heading>

              <Text color={'gray.500'} fontSize={'lg'}>
                {product.description}
              </Text>

              <Menu>
                <MenuButton as={Button} textAlign="left" rightIcon={<ChevronDownIcon />}>
                  {selectedVariant.title}
                </MenuButton>
                <MenuList>
                  {product.variants.map((variant, index) => (
                    <MenuItem as={Flex} key={variant.id} onClick={() => setSelectedVariant(product.variants[index])}>
                      <AspectRatio w="64px" h="64px" ratio={4 / 3}>
                        <Image
                          src={variant.imageURL}
                          alt={variant.title}
                          objectFit="cover"
                        />
                      </AspectRatio>
                      <VStack align="flex-start" ml="5" pt="2">
                        <strong>{variant.title}</strong>
                        <Text>{variant.supplier.name}</Text>
                        <Text fontSize="sm">
                          {formatWeight(variant.weight)}
                        </Text>
                      </VStack>
                      <Spacer/>
                      <VStack align="flex-start" ml="5" pt="2" textAlign="right">
                        <Text fontSize={'lg'}>{formatPrice(variant.price)}</Text>
                      </VStack>
                      
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

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
                variant={selectedVariant}
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
