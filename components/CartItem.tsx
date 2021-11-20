import React from "react";
import {
  Flex,
  AspectRatio,
  Image,
  Box,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { ICartItem, IProduct } from "../types";
import ChangeAmount, { ChangeEvent } from "./ChangeAmout";
import { CloseIcon } from "@chakra-ui/icons";

type CartItemProps = {
  item: ICartItem;
  onAmoutChange: (changeEvent: ChangeEvent) => void;
};

// function AmountReducer(amount: number, action: ChangeAction) {
//   switch (action) {
//     case "increment":
//       return amount + 1;
//     case "decrement":
//       return amount - 1;
//   }
// }

function CartItem({ item, onAmoutChange }: CartItemProps) {
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
          onAmoutChange={onAmoutChange}
        />
        <Text fontWeight="600" w="90px">
          {item.product.price_formatted}
        </Text>
        <IconButton aria-label="Remove cart item" icon={<CloseIcon />} />
      </HStack>
    </Flex>
  );
}

export default CartItem;
