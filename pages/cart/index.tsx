import { Box, Heading } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useReducer } from "react";
import CartItemList from "../../components/CartItemList";
import { ChangeAction } from "../../components/ChangeAmout";
import DeliveryOptions from "../../components/DeliveryOptions";
import { products } from "../../constants";
import { ICartItem } from "../../hooks/useCart";
import { getTitle } from "../../utils/getTitle";

const fakeData: ICartItem[] = products.map((item, index) => ({
  product: item,
  id: index,
  quantity: 1,
})) as any;

type ActionType = ChangeAction | "remove";

type Action = {
  itemId: number;
  type: ActionType;
  value?: number;
};

type State = {
  items: ICartItem[];
};

function getItem(state: State, id: number) {
  return state.items.find((s) => s.id === id);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": {
      const currentItem = getItem(state, action.itemId);
      if (!currentItem) return state;

      return {
        items: [
          ...state.items.map((item) => {
            if (item === currentItem) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        ],
      };
    }
    case "decrement": {
      const currentItem = getItem(state, action.itemId);
      if (!currentItem) return state;

      return {
        items: [
          ...state.items.map((item) => {
            if (item === currentItem) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          }),
        ],
      };
    }
    case "set": {
      const currentItem = getItem(state, action.itemId);
      if (!currentItem) return state;

      return {
        items: [
          ...state.items.map((item) => {
            if (item === currentItem) {
              return {
                ...item,
                quantity: action.value || 0,
              };
            }
            return item;
          }),
        ],
      };
    }
    case "remove": {
      return {
        items: state.items.filter((item) => item.id !== action.itemId),
      };
    }
    default:
      return state;
  }
}

const Cart: NextPage = () => {
  const [{ items }, dispatch] = useReducer(reducer, { items: fakeData });

  return (
    <Box px="20" pt="5" pb="20">
      <Head>
        <Heading>{getTitle("Košík")}</Heading>
      </Head>

      <Box p={4}>
        <Heading mb="5">Košík</Heading>
        <CartItemList
          items={items}
          onAmountChange={(e) =>
            dispatch({ type: e.action, itemId: e.item.id })
          }
          onItemRemove={(e) => {
            dispatch({ type: "remove", itemId: parseInt(e.id + "") });
          }}
        />
      </Box>
      <Box pt="5">
        <Box pb="5">
          <Heading as="h2" size="lg" pb="1">
            Doporučené nákupy
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Zde si můžete vybrat jiný nákup. Pokud se Vám nebude líbit, můžete
            se vrátit zpět na Váš výber.
          </Text>
        </Box>
        <DeliveryOptions />
        <Box pt="10" textAlign="right">
          <Button size="lg">Na dopravu a platbu</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
