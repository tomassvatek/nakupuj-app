import React, { useRef, useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Menu,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputLeftElement,
  useMenuButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { products } from '../constants';
import ProductVariantItem from './ProductVariantItem';

// eslint-disable-next-line react/display-name
const MenuPlacer: any = React.forwardRef<any>(
  ({ children, as: Component, ...rest }: any, ref) => {
    const buttonProps = useMenuButton(rest, ref);

    return (
      <Component {...buttonProps}>
        {children}
      </Component>
    );
  }
)

export function Search() {
  const ref = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const product = products[0];
  const variants = products[0].variants;

  const handleQuery: React.ChangeEventHandler = (event) => {
    setQuery((event.target as any).value);

    setTimeout(() => {
      if (ref.current) {
        (ref.current as any).focus();
      }
    }, 100);
  };

  const handleSelect = () => {
    setQuery('');
  }

  return (
    <Menu isOpen={true} placement={'auto'} computePositionOnMount>
      <MenuPlacer as={InputGroup}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input type="search" placeholder="Hledat" background="white" value={query} onChange={handleQuery} ref={ref} />
      </MenuPlacer>

      {query ? (
        <MenuList>
          {variants.map((variant) => (
            <NextLink href={`/product/${product.id}/${variant.id}`} key={variant.id}>
              <MenuItem as={Flex} onClick={handleSelect}>
                <ProductVariantItem variant={variant} />
              </MenuItem>
            </NextLink>
          ))}
        </MenuList>
      ) : null}
    </Menu>
  )
}