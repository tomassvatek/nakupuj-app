// cena 
// cenová range

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Badge,
  Box,
} from '@chakra-ui/react';
import ErrorPage from '../../404'
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import NextLink from 'next/link';
import type { NextPage, GetServerSideProps } from 'next'
import { BsCartFill } from 'react-icons/bs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import BreadcrumbComponent from '../../../components/Breadcrumb'
import { getTitle } from '../../../utils/getTitle'
import { products } from '../../../constants';
import type { IProduct, IProductVariant } from '../../../types';
import AddToCartConfirmation from '../../../components/AddToCartConfirmation';
import { useCart } from '../../../hooks/useCart';
import ChangeAmount, { ChangeAmountHandler } from '../../../components/ChangeAmout';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ProductVariantItem from '../../../components/ProductVariantItem';
import { formatPrice } from '../../../utils/formatters';

interface Props {
  product?: IProduct,
};

function getRanges(product?: IProduct): any {
  if (!product || !product.variants) return '';
  let min = product.variants[0];
  let max = product.variants[0];

  for (var i = 0; i < product.variants.length; i++) {
    const variant = product.variants[i];
    if (variant.price > max.price) {
      max = variant;
    }
    if (variant.price < min.price) {
      min = variant;
    }
  }

  return [min, max];
}

function formatRange(min: IProductVariant, max: IProductVariant) {
  if (min !== max) {
    return `${formatPrice(min.price).replace('Kč', '')}- ${formatPrice(max.price)}`;
  }
  return `${formatPrice(min.price)}`;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCart();
  const [amount, setAmount] = useState(1);
  const [min, max] = getRanges(product);

  const getSelectedVariant = (): IProductVariant | undefined => {
    let variantIndex = 0;
    const variantId = router.query.variant ? parseInt(router.query.variant as any, 10) : undefined;
    if (product) {
      if (typeof variantId !== 'undefined') {
        variantIndex = product.variants.findIndex((i) => i.id === variantId);
      } else {
        variantIndex = product.variants.findIndex((i) => i.id === getCheapestVariantForProduct(product).id);
      }
    }
    return product?.variants[variantIndex];
  }

  const getCheapestVariantForProduct = (product: IProduct): IProductVariant => {
    let variant = product.variants.reduce(function (prev, curr) { return prev.price < curr.price ? prev : curr });
    console.log(`variant`, variant);
    return variant;
  }

  const selectedVariant = getSelectedVariant();

  const setSelectedVariant = (variantId: number) => {
    const productId = product?.id;
    router.replace(`/product/${productId}/${variantId}`);
  }

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

      <Container maxW={'6xl'} py={12}>
        <BreadcrumbComponent items={['index']}>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href={`/product/${product.id}`}>{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbComponent>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={product.title}
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
            <Text color="gray.500">{selectedVariant.manufacturer}</Text>
            <Heading m={0}>{product.title}</Heading>

            <Text color={'gray.500'} fontSize={'lg'}>
              {product.description}
            </Text>

            <Menu>
              <MenuButton as={Button} textAlign="left" rightIcon={<ChevronDownIcon />}>
                <Flex justifyContent="space-between">
                  <Text maxW="60%" isTruncated={true}>{selectedVariant.title}</Text>
                  <div>
                    <Badge mt={0.5} mr={2} float="left" colorScheme={'green'}>Nejlevnější</Badge>
                    <strong>{formatPrice(selectedVariant.price)}</strong>
                  </div>
                </Flex>
              </MenuButton>
              <MenuList>
                {product.variants.map((variant, index) => (
                  <MenuItem bg={variant === selectedVariant ? 'gray.200' : undefined} as={Flex} key={variant.id} onClick={() => setSelectedVariant(variant.id)}>
                    <ProductVariantItem
                      variant={variant}
                      cheapest={min === variant}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <Flex>
              <Box mr={4}>
                <ChangeAmount
                  defaultValue={amount}
                  value={amount}
                  min={1}
                  onAmoutChange={handleAmountChange}
                />
              </Box>

              <Heading>
                {formatRange(min, max)}
              </Heading>
            </Flex>

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
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props: any = {};
  const id = context.params?.id as string | undefined;

  if (id) {
    const _id = parseInt(id, 10);
    props.product = products.find(p => p.id === _id) || null;
  }

  if (!props.product) {
    context.res.statusCode = 404;
  }

  return {
    props,
  };
}

export default ProductDetail
