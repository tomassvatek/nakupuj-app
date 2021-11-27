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
import ChangeAmount, { ChangeAmountHandler } from "./ChangeAmout";
import { CloseIcon } from "@chakra-ui/icons";
import { formatPrice, formatWeight } from "../utils/formatters";
import { ICartItem } from "../hooks/useCart";
import NextLink from "next/link";

export type AmountChangeEvent = any & {
  item: ICartItem;
};

interface CartItemProps {
  item: ICartItem;
  onItemRemove: (item: ICartItem) => void;
  onAmoutChange: (changeEvent: AmountChangeEvent) => void;
}

function CartItem({ item, onItemRemove, onAmoutChange }: CartItemProps) {
  const variant = item.item;

  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <NextLink href={`product/${variant.id}`}>
          <AspectRatio w="64px" h="64px" ratio={4 / 3} cursor="pointer">
            <Image
              src={variant.imageURL}
              alt={variant.title}
              objectFit="cover"
            />
          </AspectRatio>
        </NextLink>
        <VStack align="flex-start" ml="5" pt="2">
          <NextLink href={`product/${variant.id}`}>
            <Text fontSize="sm" fontWeight="600" pb="0" cursor="pointer">
              {variant.title}
            </Text>
          </NextLink>
          <Text fontSize="sm">
            {formatWeight(variant.weight)} &nbsp;{" "}
            <Link>Vybrat alternativu</Link>
          </Text>
        </VStack>
      </Flex>
      <HStack spacing="4">
        <ChangeAmount
          defaultValue={item.quantity}
          onAmoutChange={(e) => onAmoutChange({ ...e, item })}
        />
        <Text fontWeight="600" w="90px" textAlign="right">
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
