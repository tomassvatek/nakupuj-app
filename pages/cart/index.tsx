import { Box, Container, Heading } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import CartItemList from "../../components/CartItemList";
import DeliveryOptions from "../../components/DeliveryOptions";
import { deliveryOptions, products } from "../../constants";
import { ICartItem, useCart } from "../../hooks/useCart";
import { getTitle } from "../../utils/getTitle";
import NextLink from "next/link";
import { DeliveryOptionItem } from "../../components/DeliveryOption";
import produce from "immer";
import EmptyCart from "../../components/EmptyCart";

const Cart: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState<number | string>("1");
  const { items, updateItemQuantity, updateItem, removeItem, setItems, isEmpty } = useCart();

  const originCartRef = useRef<ICartItem[]>([]);
  const rohlikCartRef = useRef<ICartItem[]>([]);
  const kosikCartRef = useRef<ICartItem[]>([]);
  const cheapestCartRef = useRef<ICartItem[]>([]);

  useEffect(() => {
    originCartRef.current = originCart;
    cheapestCartRef.current = cheapestCart;
    rohlikCartRef.current = rohlikCart;
    kosikCartRef.current = kosikCart;
  }, []);

  const originCart: ICartItem[] = useMemo<ICartItem[]>(() => {
    if (selectedOption != "1") return originCartRef.current;

    const updatedOrigin = produce(items, (draft) => draft);
    originCartRef.current = updatedOrigin;
    return updatedOrigin;
  }, [items, selectedOption]);

  const cheapestCart = useMemo<ICartItem[]>(() => {
    let copyItems;
    if (selectedOption == "1") copyItems = originCartRef.current;
    else if (selectedOption == "2") copyItems = items;
    else return cheapestCartRef.current;

    const copyOrigin = produce(copyItems, (draft) => draft);
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
    cheapestCartRef.current = cheapestCart;
    return cheapestCart;
  }, [items, selectedOption]);

  const rohlikCart = useMemo<ICartItem[]>(() => {
    let copyItems;
    if (selectedOption == "1") copyItems = originCartRef.current;
    else if (selectedOption == "3") copyItems = items;
    else return rohlikCartRef.current;

    const copyOrigin = produce(copyItems, (draft) => draft);
    const rohlikCart = copyOrigin.map((cartItem) => {
      const item: ICartItem = {
        id: Math.floor(Math.random() * 300000),
        item: cartItem.item,
        price: cartItem.price,
        quantity: cartItem.quantity,
      };
      return item;
    });

    rohlikCartRef.current = rohlikCart;
    return rohlikCart;
  }, [items, selectedOption]);

  const kosikCart = useMemo<ICartItem[]>(() => {
    let copyItems;
    if (selectedOption == "1") copyItems = originCartRef.current;
    else if (selectedOption == "4") copyItems = items;
    else return kosikCartRef.current;

    const copyOrigin = produce(copyItems, (draft) => draft);
    const kosikCart = copyOrigin.map((cartItem) => {
      const item: ICartItem = {
        id: Math.floor(Math.random() * 300000),
        item: cartItem.item,
        price: cartItem.price,
        quantity: cartItem.quantity,
      };
      return item;
    });

    kosikCartRef.current = kosikCart;
    return kosikCart;
  }, [items, selectedOption]);

  const options = useMemo<DeliveryOptionItem[]>(() => {
    return deliveryOptions.map((option) => {
      if (option.optionId == 1) {
        const currCartPrice = getCartPrice(originCart);
        return { ...option, price: currCartPrice };
      }
      if (option.optionId == 2) {
        const cheapestCartPrice = getCartPrice(cheapestCart);
        return { ...option, price: cheapestCartPrice };
      }
      if (option.optionId == 3) {
        const rohlikCartPrice = getCartPrice(rohlikCart);
        return { ...option, price: rohlikCartPrice };
      }
      if (option.optionId == 4) {
        const kosikCartPrice = getCartPrice(kosikCart);
        return { ...option, price: kosikCartPrice };
      }

      return option;
    });
  }, [cheapestCart, kosikCart, originCart, rohlikCart]);

  function handleRadioChange(optionId: string) {
    setSelectedOption(optionId);
    handleDeliveryOptionChange(optionId);
  }

  function getCheapestItem(id: number) {
    return products
      .find((product) => product.id === id)
      ?.variants.reduce((prev, curr) =>
        prev.price < curr.price ? prev : curr
      );
  }

  function getCartPrice(cart: ICartItem[]) {
    return (
      cart?.reduce((acc, { price, quantity }) => {
        return acc + price * quantity;
      }, 0) ?? 0
    );
  }

  function handleDeliveryOptionChange(optionId: string) {
    switch (optionId) {
      case "1":
        setItems(originCartRef.current);
        break;
      case "2":
        setItems(cheapestCart);
        break;
      case "3":
        setItems(rohlikCart);
        break;
      case "4":
        setItems(kosikCart);
        break;
    }
  }

  function handleAmountChange(e: any) {
    updateItemQuantity(e.item.id, e.value);
  }

  if (isEmpty)
    return (
      <Container maxW={{ base: "6xl", xl: "8xl" }} py={5}>
        <Head>
          <title>{getTitle("Košík")}</title>
        </Head>

        <Box py={4}>
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
        <Heading mb="5">Košík</Heading>
        <CartItemList
          items={items}
          onAmountChange={handleAmountChange}
          onItemRemove={(e) => {
            removeItem(e.id);
          }}
          updateItem={updateItem}
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
          onChange={handleRadioChange}
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
