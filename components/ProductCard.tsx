import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Center,
  Button,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IProduct } from "../types";
import { formatPrice } from '../utils/formatters';
import { useCart } from '../hooks/useCart';
import AddToCartConfirmation from "./AddToCartConfirmation";
import { useState } from "react";

function ProductCard({ product }: { product: IProduct }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCart();
  const [amount, setAmount] = useState(1);
  const variant = product.variants[0];

  const handleAddToCart: React.MouseEventHandler = () => {
    setAmount(1);
    addItem(variant, amount);
    onOpen();
  };

  return (
    <Flex p={50} w={500} h={500} alignItems="start" justifyContent="start">
      <Box bg={useColorModeValue("white", "gray.800")} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
        <Center className="cardImgContainer">
          <NextLink href={`/product/${product.id}`}>
            <a>
              <Image src={variant.imageURL} alt={`Obrázek ${product.title}`} roundedTop="lg" maxW={300} maxH={300}/>
            </a>  
          </NextLink>
          <Tooltip label="Přidat do košíku" bg="white" placement={"top-start"} color={"gray.800"} fontSize={"1.2em"}>
              <Button boxSize={10} className="addToCartBtn" onClick={handleAddToCart}>
                <AddIcon boxSize={5}/>
                <chakra.a href={"#"} display={"flex"}/>
              </Button>
            </Tooltip>
        </Center>

        <AddToCartConfirmation
          variant={variant}
          onClose={onClose}
          isOpen={isOpen}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <HStack>
              <Box fontSize="3xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {product.title}
              </Box>
              <Box d="flex" alignItems="baseline">
                {product.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    Novinka
                  </Badge>
                )}
              </Box>
            </HStack>
          </Flex>
          {variant && (
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color="gray.800">
              <Box as="span" mr={1}>
                od
              </Box>
              <Box as="span" fontWeight="semibold">
                {formatPrice(getCheapestPriceForProduct(product))}
              </Box>
            </Box>
          </Flex>
          )}
        </Box>
      </Box>
    </Flex>
  );
}

const getCheapestPriceForProduct = (product: IProduct): number => {
  return product.variants.reduce(function (prev, curr) { return prev.price < curr.price ? prev : curr }).price;
}

export default ProductCard;
