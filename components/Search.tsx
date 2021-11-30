import React, {useEffect, useRef, useState} from "react";
import NextLink from "next/link";
import {
  Flex,
  Menu,
  MenuList,
  Input,
  InputGroup,
  InputLeftElement,
  useMenuButton,
  Text,
  Center,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { products } from "../constants";
import ProductVariantItem from "./ProductVariantItem";
import {IProductVariant} from "../types";
import StyledMenuItem from './StyledMenuItem';

// eslint-disable-next-line react/display-name
const MenuPlacer: any = React.forwardRef<any>(
  ({ children, as: Component, ...rest }: any, ref) => {
    const buttonProps = useMenuButton(rest, ref);

    return <Component {...buttonProps}>{children}</Component>;
  }
);

export function Search() {
  const ref = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const product = products[0];

  const [data, setData] = useState<IProductVariant[]>([])

  const [results, setResults] = useState<IProductVariant[]>([])

  useEffect(() => {
    let tmpData: IProductVariant[] = [];
    for(let product of products){
      for(let variant of product.variants){
        tmpData.push(variant)
      }
    }
    setData(tmpData)
  },[])

  const handleQuery: React.ChangeEventHandler = (event) => {
    setQuery((event.target as any).value);

    setResults(data.filter(item => {
      if( item.title.toLowerCase().includes((event.target as any).value.toLowerCase()) ||
          products.find(product => product.id === item.parentId)?.title.toLowerCase().includes((event.target as any).value.toLowerCase()))
        return item
    }))

    setTimeout(() => {
      if (ref.current) {
        (ref.current as any).focus();
      }
    }, 100);
  };

  const handleSelect = () => {
    setQuery("");
  };

  return (
    <Menu isOpen={query.length > 2} placement={"bottom-start"} computePositionOnMount>
      <MenuPlacer as={InputGroup}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Hledat"
          background="white"
          value={query}
          onChange={handleQuery}
          ref={ref}
        />
      </MenuPlacer>

      <MenuList zIndex="25550" width="500px">
        {results.length <= 6 && results.length > 0 ? results.map((variant) => (
          <NextLink
            href={`/product/${variant.parentId}/${variant.id}`}
            key={variant.id}
          >
            <StyledMenuItem as={Flex} onClick={handleSelect}>
              <ProductVariantItem variant={variant} />
            </StyledMenuItem>
          </NextLink>
        )) : (
          <Center>
            <Text color="gray.500">Nic jsme pro vás nenašli.</Text>
          </Center>
        )}
      </MenuList>
    </Menu>
  );
}
