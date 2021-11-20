import { Box } from "@chakra-ui/react";
import { ICartItem } from "../types";
import CartItem from "./CartItem";
import { AmountChangeEvent } from "./CartItem";

type CartItemListProps = {
  items: ICartItem[];
  onAmountChange: (event: AmountChangeEvent) => void;
};

function CartItemList({ items, onAmountChange }: CartItemListProps) {
  return (
    <Box>
      {items.map((item) => {
        return (
          <Box key={item.id} pb="5">
            <CartItem item={item} onAmoutChange={onAmountChange} />
          </Box>
        );
      })}
    </Box>
  );
}

export default CartItemList;
