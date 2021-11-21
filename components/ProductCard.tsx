import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Center
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IProduct } from "../types";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <NextLink href={`/product/${product.id}`}>
      <Flex p={50} w={500} h={500} alignItems="center" justifyContent="center">
        <Box bg={useColorModeValue("white", "gray.800")} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
          {product.isNew && (
            <Circle size="10px" position="absolute" top={2} right={2} bg="red.200"/>
          )}

          <Center>
            <Image src={product.imageURLs[0]} alt={`Obrázek ${product.title}`} roundedTop="lg" maxW={300} maxH={300}/>
          </Center>

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {product.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  Novinka
                </Badge>
              )}
            </Box>

            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box fontSize="3xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {product.title}
              </Box>
              <Tooltip label="Přidat do košíku" bg="white" placement={"top"} color={"gray.800"} fontSize={"1.2em"}>
                <chakra.a href={"#"} display={"flex"}/>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" mr={1}>
                  od
                </Box>
                <Box as="span" fontWeight="semibold">
                  {getCheapestPriceForProduct(product).toFixed(2)}
                </Box>
                <Box as="span" ml={1}>
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

const getCheapestPriceForProduct = (product: IProduct): number => {
  return product.variants.reduce(function (prev, curr) { return prev.price < curr.price ? prev : curr }).price;
}

export default ProductCard;
