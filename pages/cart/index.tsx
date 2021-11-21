import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import { useReducer, useState } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import CartItemList from "../../components/CartItemList";
import { ChangeAction } from "../../components/ChangeAmout";
import { products } from "../../constants";
import { ICartItem } from '../../hooks/useCart';
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
              }
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
              }
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
              }
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
    <Box px="20" py="15">
      <Head>
        <Heading>{getTitle("Košík")}</Heading>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={["index", "cart"]} />
        <Heading mb="5">Košík</Heading>
        <CartItemList
          items={items}
          onAmountChange={(e) =>
            dispatch({ type: e.action, itemId: e.item.id })
          }
          onItemRemove={(e) => {
            dispatch({ type: "remove", itemId: parseInt(e.id+'') });
          }}
        />
      </Box>
    </Box>
  );
};

export default Cart;
