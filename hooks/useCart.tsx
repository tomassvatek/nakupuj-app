// based on https://github.com/notrab/react-use-cart/blob/main/src/index.tsx
import React, { useContext, useEffect, useReducer, createContext } from "react";
import { IProductVariant } from "../types";

import useLocalStorage from "./useLocalStorage";

export interface ICartItem {
  id: number | string;
  price: number;
  quantity: number;
  itemTotal?: number;
  item: IProductVariant;
  [key: string]: any;
}

interface InitialState {
  id: string;
  items: ICartItem[];
  isEmpty: boolean;
  totalItems: number;
  totalUniqueItems: number;
  cartTotal: number;
  metadata?: Metadata;
}

export interface Metadata {
  [key: string]: any;
}

interface CartProviderState extends InitialState {
  addItem: (
    item: Omit<ICartItem, "quantity" | "itemTotal">,
    quantity?: number
  ) => void;
  removeItem: (id: ICartItem["id"]) => void;
  updateItem: (id: ICartItem["id"], payload: ICartItem) => void;
  setItems: (items: ICartItem[]) => void;
  updateItemQuantity: (id: ICartItem["id"], quantity: number) => void;
  emptyCart: () => void;
  getItem: (id: ICartItem["id"]) => any | undefined;
  inCart: (id: ICartItem["id"]) => boolean;
  clearCartMetadata: () => void;
  setCartMetadata: (metadata: Metadata) => void;
  updateCartMetadata: (metadata: Metadata) => void;
}

export type Actions =
  | { type: "SET_ITEMS"; payload: ICartItem[] }
  | { type: "ADD_ITEM"; payload: ICartItem }
  | { type: "REMOVE_ITEM"; id: ICartItem["id"] }
  | {
      type: "UPDATE_ITEM";
      id: ICartItem["id"];
      payload: ICartItem;
    }
  | { type: "EMPTY_CART" }
  | { type: "CLEAR_CART_META" }
  | { type: "SET_CART_META"; payload: Metadata }
  | { type: "UPDATE_CART_META"; payload: Metadata };

export const initialState: any = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  cartTotal: 0,
  metadata: {},
};

const CartContext = createContext<CartProviderState | undefined>(initialState);

export const createCartIdentifier = (len = 12) =>
  [...Array(len)].map(() => (~~(Math.random() * 36)).toString(36)).join("");

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("Expected to be wrapped in a CartProvider");

  return context;
};

function reducer(state: CartProviderState, action: Actions) {
  switch (action.type) {
    case "SET_ITEMS":
      return generateCartState(state, action.payload);

    case "ADD_ITEM": {
      const items = [...state.items, action.payload];

      return generateCartState(state, items);
    }

    case "UPDATE_ITEM": {
      const items = state.items.map((item: ICartItem) => {
        if (item.id !== action.payload.id) return item;

        return {
          ...item,
          ...action.payload,
        };
      });

      console.log(action, generateCartState(state, items), items);

      return generateCartState(state, items);
    }

    case "REMOVE_ITEM": {
      const items = state.items.filter((i: ICartItem) => i.id !== action.id);

      return generateCartState(state, items);
    }

    case "EMPTY_CART":
      return initialState;

    case "CLEAR_CART_META":
      return {
        ...state,
        metadata: {},
      };

    case "SET_CART_META":
      return {
        ...state,
        metadata: {
          ...action.payload,
        },
      };

    case "UPDATE_CART_META":
      return {
        ...state,
        metadata: {
          ...state.metadata,
          ...action.payload,
        },
      };

    default:
      throw new Error("No action specified");
  }
}

const generateCartState = (state = initialState, items: ICartItem[]) => {
  const totalUniqueItems = calculateUniqueItems(items);
  const isEmpty = totalUniqueItems === 0;

  return {
    ...initialState,
    ...state,
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    totalUniqueItems,
    cartTotal: calculateTotal(items),
    isEmpty,
  };
};

const calculateItemTotals = (items: ICartItem[]) =>
  items.map((item) => ({
    ...item,
    itemTotal: item.price * item.quantity!,
  }));

const calculateTotal = (items: ICartItem[]) =>
  items.reduce((total, item) => total + item.quantity! * item.price, 0);

const calculateTotalItems = (items: ICartItem[]) =>
  items.reduce((sum, item) => sum + item.quantity!, 0);

const calculateUniqueItems = (items: ICartItem[]) => items.length;

export const CartProvider: React.FC<{
  id?: string;
  defaultItems?: ICartItem[];
  onSetItems?: (items: ICartItem[]) => void;
  onItemAdd?: (payload: ICartItem) => void;
  onItemUpdate?: (payload: object) => void;
  onItemRemove?: (id: ICartItem["id"]) => void;
  storage?: (
    key: string,
    initialValue: string
  ) => [string, (value: Function | string) => void];
  metadata?: Metadata;
}> = ({
  children,
  id: cartId,
  defaultItems = [],
  onSetItems,
  onItemAdd,
  onItemUpdate,
  onItemRemove,
  storage = useLocalStorage,
  metadata,
}) => {
  const id = cartId ? cartId : createCartIdentifier();

  const [savedCart, saveCart] = storage(
    cartId ? `react-use-cart-${id}` : `react-use-cart`,
    JSON.stringify({
      id,
      ...initialState,
      items: defaultItems,
      metadata,
    })
  );

  const [state, dispatch] = useReducer(reducer, JSON.parse(savedCart));
  useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const setItems = (items: ICartItem[]) => {
    dispatch({
      type: "SET_ITEMS",
      payload: items.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      })),
    });

    onSetItems && onSetItems(items);
  };

  const addItem = (item: IProductVariant, quantity = 1) => {
    if (!item.id) throw new Error("You must provide an `id` for items");
    if (quantity <= 0) return;

    const currentItem = state.items.find(
      (i: ICartItem) => i.item.id === item.id
    );

    if (!currentItem && !item.hasOwnProperty("price"))
      throw new Error("You must pass a `price` for new items");

    if (!currentItem) {
      const payload: ICartItem = {
        id: new Date().getTime(),
        item,
        quantity,
        price: item.price,
      };

      dispatch({ type: "ADD_ITEM", payload });

      onItemAdd && onItemAdd(payload);

      return;
    }

    const payload: ICartItem = {
      ...currentItem,
      item,
      quantity: currentItem.quantity + quantity,
    };

    dispatch({
      type: "UPDATE_ITEM",
      id: item.id,
      payload,
    });

    onItemUpdate && onItemUpdate(payload);
  };

  const updateItem = (id: ICartItem["id"], payload: ICartItem) => {
    if (!id || !payload) {
      return;
    }

    dispatch({ type: "UPDATE_ITEM", id, payload });

    onItemUpdate && onItemUpdate(payload);
  };

  const updateItemQuantity = (id: ICartItem["id"], quantity: number) => {
    if (quantity <= 0) {
      onItemRemove && onItemRemove(id);

      dispatch({ type: "REMOVE_ITEM", id });

      return;
    }

    const currentItem = state.items.find((item: ICartItem) => item.id === id);

    if (!currentItem) throw new Error("No such item to update");

    const payload = { ...currentItem, quantity };

    dispatch({
      type: "UPDATE_ITEM",
      id,
      payload,
    });

    onItemUpdate && onItemUpdate(payload);
  };

  const removeItem = (id: ICartItem["id"]) => {
    if (!id) return;

    dispatch({ type: "REMOVE_ITEM", id });

    onItemRemove && onItemRemove(id);
  };

  const emptyCart = () =>
    dispatch({
      type: "EMPTY_CART",
    });

  const getItem = (id: ICartItem["id"]) =>
    state.items.find((i: ICartItem) => i.id === id);

  const inCart = (id: ICartItem["id"]) =>
    state.items.some((i: ICartItem) => i.id === id);

  const clearCartMetadata = () => {
    dispatch({
      type: "CLEAR_CART_META",
    });
  };

  const setCartMetadata = (metadata: Metadata) => {
    if (!metadata) return;

    dispatch({
      type: "SET_CART_META",
      payload: metadata,
    });
  };

  const updateCartMetadata = (metadata: Metadata) => {
    if (!metadata) return;

    dispatch({
      type: "UPDATE_CART_META",
      payload: metadata,
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        getItem,
        inCart,
        setItems,
        addItem,
        updateItem,
        updateItemQuantity,
        removeItem,
        emptyCart,
        clearCartMetadata,
        setCartMetadata,
        updateCartMetadata,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
