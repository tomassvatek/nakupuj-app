import { Box } from "@chakra-ui/react";
import { ICartItem } from "../types";
import CartItem from "./CartItem";
import { ChangeAction } from "./ChangeAmout";

type CartItemListProps = {
  items: ICartItem[];
};

function AmountReducer(amount: number, action: ChangeAction) {
  switch (action) {
    case "increment":
      return amount + 1;
    case "decrement":
      return amount - 1;
  }
}

function CartItemList({ items }: CartItemListProps) {
  return (
    <Box>
      {items.map((item) => {
        return (
          <Box key={item.id} pb="5">
            <CartItem item={item} onAmoutChange={(e) => console.log(e)} />
          </Box>
        );
      })}
    </Box>
  );
}

export default CartItemList;
