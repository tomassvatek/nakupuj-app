import { Box, Container, Heading } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import CartItemList from "../../components/CartItemList";
import DeliveryOptions from "../../components/DeliveryOptions";
import {
  deliveryOptions,
  products,
} from "../../constants";
import { ICartItem, useCart } from "../../hooks/useCart";
import { getTitle } from "../../utils/getTitle";
import NextLink from "next/link";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { DeliveryOptionItem } from "../../components/DeliveryOption";
import produce from "immer";
import EmptyCart from "../../components/EmptyCart";

const Cart: NextPage = () => {
  const {
    items,
    updateItemQuantity,
    addItem,
    emptyCart,
    removeItem,
    cartTotal,
    isEmpty,
    setItems,
  } = useCart();

  const originCart = useMemo<ICartItem[]>(() => {
    return produce(items, (draft) => draft);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cheapestCart = useMemo<ICartItem[]>(() => {
    const copyOrigin = produce(originCart, (draft) => draft);
    const cheapestCart: ICartItem[] = [];

    copyOrigin.forEach((cartItem) => {
      const cheapest = getCheapestItem(cartItem.item.parentId);
      if (!cheapest) return;

      if (cheapest.price < cartItem.item.price) {
        cheapestCart.push({
          id: Math.floor(Math.random() * 300000),
          item: cheapest,
          price: cheapest.price,
          quantity: cartItem.quantity,
        });
      } else {
        cheapestCart.push(cartItem);
      }
    });
    return cheapestCart;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = useMemo<DeliveryOptionItem[]>(() => {
    return deliveryOptions.map((option) => {
      if (option.optionId == 1) {
        const currPrice = originCart?.reduce(
          (acc, { item }) => acc + item.price,
          0
        );
        return { ...option, price: currPrice ?? cartTotal };
      }
      if (option.optionId == 2) {
        const cheapestPrice: number = cheapestCart.reduce((acc, { price }) => {
          return acc + price;
        }, 0);
        return { ...option, price: cheapestPrice };
      }
      return option;
    });
  }, [cartTotal, cheapestCart, originCart]);

  const [selectedOption, setSelectedOption] = useState<number | string>("1");
  const [selectedInnerValue, setInnerSelectedValue] = useState<number | string>(
    "4"
  );

  function handleRadioChange(optionId: string) {
    setSelectedOption(optionId);
    handleDeliveryOptionChange(optionId);
  }

  function handleInnnerRadioChange(optionId: string) {
    setInnerSelectedValue(optionId);
    handleDeliveryOptionChange(optionId);
  }

  function getCheapestItem(id: number) {
    return products
      .find((product) => product.id === id)
      ?.variants.reduce((prev, curr) =>
        prev.price < curr.price ? prev : curr
      );
  }

  function handleDeliveryOptionChange(optionId: string) {
    switch (optionId) {
      case "1":
        setItems(originCart);
        break;
      case "2":
        setItems(cheapestCart);
        break;
    }
  }

  if (items.length === 0)
    return (
      <Container maxW={"6xl"} p={5}>
        <Head>
          <title>{getTitle("Košík")}</title>
        </Head>

        <Box py={4}>
          <BreadcrumbComponent items={["index", "cart"]} />
          <EmptyCart />
        </Box>
      </Container>
    );

  return (
    <Container maxW={"6xl"} p={5}>
      <Head>
        <title>{getTitle("Košík")}</title>
      </Head>

      <Box py={4}>
        <BreadcrumbComponent items={["index", "cart"]} />

        <Heading mb="5">Košík</Heading>
        <CartItemList
          items={items}
          onAmountChange={(e) => {
            updateItemQuantity(e.item.id, e.value);
          }}
          onItemRemove={(e) => {
            removeItem(e.id);
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
        <DeliveryOptions
          cartOptions={options}
          radioValue={selectedOption}
          innerRadioValue={selectedInnerValue}
          onChange={handleRadioChange}
          onInnerOptionChange={handleInnnerRadioChange}
        />
        <Box pt="10" textAlign="right">
          <NextLink href="/cart/payment">
            <Button size="lg" colorScheme="green">
              Na dopravu a platbu
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
