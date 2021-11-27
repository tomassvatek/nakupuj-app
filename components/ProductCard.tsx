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
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IProduct, IProductVariant } from "../types";
import { formatPrice } from '../utils/formatters';
import { useCart } from '../hooks/useCart';
import AddToCartConfirmation from "./AddToCartConfirmation";
import { useState } from "react";

function ProductCard({ product }: { product: IProduct }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCart();
  const [amount, setAmount] = useState(1);
  const variant = getCheapestVariantForProduct(product);

  const handleAddToCart: React.MouseEventHandler = () => {
    setAmount(1);
    addItem(variant, amount);
    onOpen();
  };

  return (
    <Box bg={useColorModeValue("white", "gray.800")} h={300} w={200} borderWidth="1px" rounded="lg" shadow="lg" mt={3}>
      <Flex h="100%" flexDirection="column" justifyContent="space-between">
        <Center className="cardImgContainer" m={3} h="50%">
          <NextLink href={`/product/${product.id}`}>
            <a>
              <Image src={variant.imageURL} display="block" alt={`Obrázek ${product.title}`} fit="scale-down" roundedTop="lg" maxH={180} maxW={180} mt={5} />
            </a>
          </NextLink>
        </Center>
        <Tooltip label="Přidat do košíku" bg="white" placement={"top-start"} color={"gray.800"} fontSize={"1.2em"}>
          <Button boxSize={10} className="addToCartBtn" onClick={handleAddToCart}>
            <AddIcon boxSize={5} />
            <chakra.a href={"#"} display={"flex"} />
          </Button>
        </Tooltip>
        <Box pl={4} pr={4} pb={2}>
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
                  {formatPrice(getCheapestVariantForProduct(product).price)}
                </Box>
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
      <AddToCartConfirmation variant={variant} onClose={onClose} isOpen={isOpen} />
    </Box >
  );
}

const getCheapestVariantForProduct = (product: IProduct): IProductVariant => {
  return product.variants.reduce(function (prev, curr) { return prev.price < curr.price ? prev : curr });
}

export default ProductCard;
