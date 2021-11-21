import React from "react";
import {
  Flex,
  AspectRatio,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { IProduct } from "../types";
import ChangeAmount, { ChangeAmountHandler } from "./ChangeAmout";
import { CloseIcon } from "@chakra-ui/icons";
import { formatPrice, formatWeight } from '../utils/formatters';
import { ICartItem } from '../hooks/useCart';

export type AmountChangeEvent = any & {
  item: ICartItem;
};

interface CartItemProps {
  item: ICartItem;
  onItemRemove: (item: ICartItem) => void;
  onAmoutChange: (changeEvent: AmountChangeEvent) => void;
};

function CartItem({ item, onItemRemove, onAmoutChange }: CartItemProps) {
  const variant = item.product.variants[0]!;

  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <AspectRatio w="64px" h="64px" ratio={4 / 3}>
          <Image
            src={variant.imageURL}
            alt={item.product.title}
            objectFit="cover"
          />
        </AspectRatio>
        <VStack align="flex-start" ml="5" pt="2">
          <Text fontSize="sm" fontWeight="600" pb="0">
            {item.product.title}
          </Text>
          <Text fontSize="sm">
            {formatWeight(variant.weight)} &nbsp; <Link>Vybrat alternativu</Link>
          </Text>
        </VStack>
      </Flex>
      <HStack spacing="4">
        <ChangeAmount
          defaultValue={item.quantity}
          onAmoutChange={(e) => onAmoutChange({ ...e, item })}
        />
        <Text fontWeight="600" w="90px">
          {formatPrice(item.quantity * variant.price)}
        </Text>
        <IconButton
          aria-label="Remove cart item"
          onClick={() => onItemRemove(item)}
          icon={<CloseIcon />}
        />
      </HStack>
    </Flex>
  );
}

export default CartItem;
