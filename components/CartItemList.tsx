import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  RadioGroup,
  Radio,
  Flex
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ICartItem } from "../hooks/useCart";
import { IProductVariant } from "../types";
import CartItem from "./CartItem";
import { AmountChangeEvent } from "./CartItem";
import { products } from "../constants";
import ProductVariantItem from "./ProductVariantItem";

interface CartItemListProps {
  items: ICartItem[];
  onItemRemove: (item: ICartItem) => void;
  onAmountChange: (event: AmountChangeEvent) => void;
  updateItem: (id: ICartItem["id"], payload: ICartItem) => void;
};

const CartItemList = ({ items, onItemRemove, onAmountChange, updateItem }: CartItemListProps) => {
  const [selectedCartItem, setselectedCartItem] = useState<ICartItem>();
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [radioGroupVariants, setRadioGroupVariants] = useState<IProductVariant[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (selectedCartItem && selectedCartItem.item) {
      let product = products.find(p => p.id === selectedCartItem.item.parentId);
      if (product) {
        setRadioGroupVariants(product.variants);
      }
    }
  }, [selectedCartItem])

  const handleRadioChange = (optionId: string) => {
    setSelectedOption(Number(optionId));
  }

  const onConfirm = () => {
    if (selectedCartItem) {
      let selectedVariant = radioGroupVariants[selectedOption];
      let updated: ICartItem = {
        ...selectedCartItem,
        price: selectedVariant.price,
        item: selectedVariant
      }
      updateItem(selectedCartItem.id, updated);
    }
    onClose();
  }

  return (
    <Box>
      {items.map((item) => {
        return (
          <Box key={+item.id * Math.random()} pb="5">
            <CartItem
              item={item}
              onAmoutChange={onAmountChange}
              onItemRemove={onItemRemove}
              setSelectedCartItem={setselectedCartItem}
              onOpen={onOpen}
              setSelectedOption={setSelectedOption}
            />
          </Box>
        );
      })}
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent minW={600}>
          <ModalCloseButton />
          <ModalHeader>Vybrat alternativu</ModalHeader>
          <ModalBody>
            <RadioGroup value={selectedOption} onChange={handleRadioChange}>
              {selectedCartItem && (
                radioGroupVariants.map((v, i) => {
                  return (
                    <Box key={i} p={3} w="100%" borderRadius="5px" bg={selectedOption == i ? "gray.100" : undefined} _hover={selectedOption == i ? { bg: "gray.100" } : { bg: "gray.50" }} >
                      <Radio w="100%" value={i} >
                        <Flex p={3}>
                          <ProductVariantItem variant={v} />
                        </Flex>
                      </Radio>
                    </Box>
                  )
                })
              )}
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="space-between">
              <Button onClick={onConfirm} colorScheme="green">Vybrat</Button>
              <Button onClick={onClose}>Zrušit</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal >
    </Box >
  );
}

export default CartItemList;
