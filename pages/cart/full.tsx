import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import { useReducer, useState } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import CartItemList from "../../components/CartItemList";
import { ChangeAction } from "../../components/ChangeAmout";
import { products } from "../../constants";
import { ICartItem } from "../../types";
import { getTitle } from "../../utils/getTitle";

const fakeData: ICartItem[] = products.map((item, index) => ({
  product: item,
  id: index,
  quantity: 1,
}));

type Action =
  | {
      type: ChangeAction;
      itemId: number;
    }
  | {
      type: ChangeAction;
      itemId: number;
    };

type State = {
  items: ICartItem[];
};

function reducer(state: State, action: Action) {
  console.log("Change amount");
  switch (action.type) {
    case "increment": {
      const item = state.items.find((s) => s.id === action.itemId);
      if (!item) return state;

      return {
        items: [
          ...state.items.filter((s) => s.id !== action.itemId),
          {
            ...item,
            quantity: item.quantity + 1,
          },
        ],
      };
    }
    case "decrement": {
      const item = state.items.find((s) => s.id === action.itemId);
      if (!item) return state;

      return {
        items: [
          ...state.items.filter((s) => s.id !== action.itemId),
          {
            ...item,
            quantity: item.quantity - 1,
          },
        ],
      };
    }
    default:
      return state;
  }
}

const Cart: NextPage = () => {
  const [{ items }, dispatch] = useReducer(reducer, { items: fakeData });

  //ChangeAmount()

  return (
    <Box px="20" py="15">
      <Head>
        <Heading>{getTitle("Košík")}</Heading>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={["index", "cart-full"]} />
        <Heading mb="5">Plný košík</Heading>
        <CartItemList
          items={items}
          onAmountChange={(e) =>
            dispatch({ type: e.action, itemId: e.item.id })
          }
        />
      </Box>
    </Box>
  );
};

export default Cart;
