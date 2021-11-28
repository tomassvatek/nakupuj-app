import { Box, Container, Heading } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import CartItemList from "../../components/CartItemList";
import DeliveryOptions from "../../components/DeliveryOptions";
import {
  eidamVariants,
  pivoVariants,
  videnskeParkyVariants,
} from "../../constants";
import { ICartItem, useCart } from "../../hooks/useCart";
import { getTitle } from "../../utils/getTitle";
import NextLink from "next/link";
import BreadcrumbComponent from '../../components/Breadcrumb'
import EmptyCart from "../../components/EmptyCart";
import CartNavigation from '../../components/CartNavigation';

const Cart: NextPage = () => {
  const { items, updateItemQuantity, addItem, emptyCart, removeItem, isEmpty } =
    useCart();
  const [originCart, setOriginCart] = useState<ICartItem[]>();
  const [selectedOption, setSelectedOption] = useState<number | string>("1");
  const [selectedInnerValue, setInnerSelectedValue] = useState<number | string>(
    "4"
  );

  useEffect(() => {
    if (selectedOption == 1) setOriginCart([...items]);
  }, [items, selectedOption]);

  function handleRadioChange(optionId: string) {
    setSelectedOption(optionId);
    handleDeliveryOptionChange(optionId);
  }

  function handleInnnerRadioChange(optionId: string) {
    setInnerSelectedValue(optionId);
    handleDeliveryOptionChange(optionId);
  }

  function handleDeliveryOptionChange(optionId: string) {
    switch (optionId) {
      case "1":
        emptyCart();
        originCart?.forEach((item) => {
          addItem(item.item, item.quantity);
        });
        break;
      case "2":
        emptyCart();
        pivoVariants.forEach((e) => {
          addItem(e, 1);
        });
        break;
      case "4":
        emptyCart();
        videnskeParkyVariants.forEach((e) => {
          addItem(e, 1);
        });
        break;
      case "5":
        emptyCart();
        eidamVariants.forEach((e) => {
          addItem(e, 1);
        });
        break;
    }
  }

  if (items.length === 0) return (

    <Container maxW={'6xl'} p={5}>
      <Head>
        <title>{getTitle("Košík")}</title>
      </Head>

      <Box py={4}>
        <BreadcrumbComponent items={['index', 'cart']} />
        <EmptyCart />
      </Box>
    </Container>
  );

  return (
    <main>
      <Head>
        <title>{getTitle("Košík")}</title>
      </Head>

      <Container maxW={'6xl'} p={4}>
        <BreadcrumbComponent items={['index', 'cart']} />

        <CartNavigation activeIndex={0} />
      </Container>

      <Container maxW={'6xl'} pb={5}>
        <Box pb="5">
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
        <Box pb="5">
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
            radioValue={selectedOption}
            innerRadioValue={selectedInnerValue}
            onChange={handleRadioChange}
            onInnerOptionChange={handleInnnerRadioChange}
          />
          <Box pt="10" textAlign="right">
            {/* <NextLink href="/cart">
                <Button aria-label="Košík" leftIcon={<BsCartFill />}>
                  {cartTotal > 0 ? formatPrice(cartTotal) : 'Košík'}
                </Button>
                
              </NextLink> */}
            <NextLink href="/cart/contact">
              <Button size="lg" colorScheme="green">
                Na kontaktní údaje
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Cart;
