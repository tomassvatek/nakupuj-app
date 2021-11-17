import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IProduct } from '../constants';

function ProductCard({ product }: { product: IProduct }) {
  return (
    <NextLink href={`/product/${product.id}`}>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {product.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={product.imageURL}
            alt={`Obrázek ${product.title}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {product.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  Novinka
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {product.title}
              </Box>
              <Tooltip
                label="Přidat do košíku"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {product.price.toFixed(2)}
                <Box as="span" color={'gray.600'} fontSize="lg">
                  Kč
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </NextLink>
  );
}

export default ProductCard;