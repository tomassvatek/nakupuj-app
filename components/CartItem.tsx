import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Flex,
  AspectRatio,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
  Button,
} from "@chakra-ui/react";
import ChangeAmount, { ChangeAmountHandler } from "./ChangeAmout";
import { CloseIcon } from "@chakra-ui/icons";
import { formatPrice, formatWeight } from "../utils/formatters";
import { ICartItem } from "../hooks/useCart";
import NextLink from "next/link";
import ProductVariantItem from "./ProductVariantItem";
import { IProductVariant } from "../types";
import { products } from "../constants";

export type AmountChangeEvent = any & {
  item: ICartItem;
};

interface CartItemProps {
  item: ICartItem;
  onItemRemove: (item: ICartItem) => void;
  onAmoutChange: (changeEvent: AmountChangeEvent) => void;
  setSelectedCartItem: Dispatch<SetStateAction<ICartItem | undefined>>;
  onOpen: () => void;
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

const CartItem = ({
  item,
  onItemRemove,
  onAmoutChange,
  setSelectedCartItem,
  onOpen,
  setSelectedOption
}: CartItemProps) => {
  const variant = item.item;

  const onChooseAlternativeClick = () => {
    setSelectedCartItem(item);
    let selected = products.find(p => p.id === item.item.parentId)!.variants.findIndex(v => v.id === item.item.id);
    if (selected !== -1) {
      setSelectedOption(selected);
    } else {
      setSelectedOption(0);
    }
    onOpen();
  };

  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <NextLink href={`/product/${variant.parentId}`}>
          <AspectRatio w="64px" h="64px" ratio={4 / 3} cursor="pointer">
            <Image
              src={variant.imageURL}
              alt={variant.title}
              objectFit="cover"
            />
          </AspectRatio>
        </NextLink>
        <VStack align="flex-start" ml="5" pt="2">
          <NextLink href={`/product/${variant.parentId}/${variant.id}`}>
            <Text fontSize="sm" fontWeight="600" pb="0" cursor="pointer" _hover={{ textDecoration: 'underline' }}>
              {variant.title}
            </Text>
          </NextLink>
          <Text fontSize="sm">
            {formatWeight(variant.weight)} &nbsp;{" "}
            {/* <Link
              textDecoration="underline"
              onClick={onChooseAlternativeClick}
            >
              Vybrat alternativu
            </Link> */}
          </Text>
        </VStack>
      </Flex>
      <HStack spacing="4">
        <ChangeAmount
          confirmDelete
          defaultValue={item.quantity}
          onAmoutChange={(e) => onAmoutChange({ ...e, item })}
        />
        <Button onClick={onChooseAlternativeClick}>Zm??nit</Button>
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
};

export default CartItem;
