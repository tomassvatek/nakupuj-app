import { Box } from "@chakra-ui/react";
import { ICartItem } from "../hooks/useCart";
import CartItem from "./CartItem";
import { AmountChangeEvent } from "./CartItem";

type CartItemListProps = {
  items: ICartItem[];
  onItemRemove: (item: ICartItem) => void;
  onAmountChange: (event: AmountChangeEvent) => void;
};

function CartItemList({
  items,
  onItemRemove,
  onAmountChange,
}: CartItemListProps) {
  return (
    <Box>
      {items.map((item) => {
        return (
          <Box key={+item.id * Math.random()} pb="5">
            <CartItem
              item={item}
              onAmoutChange={onAmountChange}
              onItemRemove={onItemRemove}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default CartItemList;
