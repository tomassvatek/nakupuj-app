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
import { ICartItem, IProduct } from "../types";
import ChangeAmount, { ChangeEvent } from "./ChangeAmout";
import { CloseIcon } from "@chakra-ui/icons";

export type AmountChangeEvent = ChangeEvent & {
  item: ICartItem;
};

type CartItemProps = {
  item: ICartItem;
  onItemRemove: (item: ICartItem) => void;
  onAmoutChange: (changeEvent: AmountChangeEvent) => void;
};

function CartItem({ item, onItemRemove, onAmoutChange }: CartItemProps) {
  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <AspectRatio w="64px" h="64px" ratio={4 / 3}>
          <Image
            src={item.product.imageURL}
            alt={item.product.title}
            objectFit="cover"
          />
        </AspectRatio>
        <VStack align="flex-start" ml="5" pt="2">
          <Text fontSize="sm" fontWeight="600" pb="0">
            {item.product.title}
          </Text>
          <Text fontSize="sm">
            {item.product.weight} &nbsp; <Link>Vybrat alternativu</Link>
          </Text>
        </VStack>
      </Flex>
      <HStack spacing="4">
        <ChangeAmount
          defaultValue={item.quantity}
          onAmoutChange={(e) => onAmoutChange({ ...e, item })}
        />
        <Text fontWeight="600" w="90px">
          {item.quantity * item.product.price}
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
