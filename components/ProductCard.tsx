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
  VStack,
  useDisclosure,
  Spacer
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
    <Flex p={5} align="center" justifyContent="center" minH={400}>
      <Box bg={useColorModeValue("white", "gray.800")} maxW="sm" minW={200} minH={200} borderWidth="1px" rounded="lg" shadow="lg" position="relative">
        <Center className="cardImgContainer" m={3}>
          <NextLink href={`/product/${product.id}`}>
            <a>
              <Image src={variant.imageURL} alt={`Obrázek ${product.title}`} fit="scale-down" align="center" roundedTop="lg" maxW={180} maxH={180} />
            </a>
          </NextLink>
          <Tooltip label="Přidat do košíku" bg="white" placement={"top-start"} color={"gray.800"} fontSize={"1.2em"}>
            <Button boxSize={10} className="addToCartBtn" onClick={handleAddToCart}>
              <AddIcon boxSize={5} />
              <chakra.a href={"#"} display={"flex"} />
            </Button>
          </Tooltip>
        </Center>

        <AddToCartConfirmation
          variant={variant}
          onClose={onClose}
          isOpen={isOpen}
        />
        <Box p="6">
          {product.isNew && (
            <Badge rounded="full" fontSize="0.6em" colorScheme="red">
              Novinka
            </Badge>
          )}
          <Flex justifyContent="space-between" alignContent="center">

            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight" maxW={170} noOfLines={2} justifyContent="center">
              <NextLink href={`/product/${product.id}`}>
                <a>{product.title}</a>
              </NextLink>
            </Box>
          </Flex>
          {variant && (
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="md" color="gray.800">
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
    </Flex >
  );
}

const getCheapestPriceForProduct = (product: IProduct): number => {
  return product.variants.reduce(function (prev, curr) { return prev.price < curr.price ? prev : curr }).price;
}

export default ProductCard;
