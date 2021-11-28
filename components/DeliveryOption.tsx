import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Radio, RadioProps } from "@chakra-ui/radio";
import React from "react";

export type DeliveryOptionItem = {
  optionId: number | string;
  title: string;
  deliveryDuration: string;
  price: number;
  save: number;
  bgColor?: string;
  py?: string;
  childrenOptions?: DeliveryOptionItem[];
};

type DeliveryOptionProps = RadioProps & DeliveryOptionItem;

function DeliveryOption({
  title,
  deliveryDuration,
  save,
  optionId,
  price,
  bgColor,
  py = "5",
  childrenOptions,
  ...props
}: DeliveryOptionProps) {
  return (
    <Box borderRadius="5px" w="100%" py={py} pl="5" pr="1" bg={bgColor}>
      <Radio w="100%" h="100%" value={optionId} {...props}>
        <Flex w="100%" pl="5" align="center" justify="space-between">
          <Text flex="6" fontWeight="600">
            {title}
          </Text>
          {/* <Text flex="2" textAlign="right">
            {deliveryDuration}
          </Text> */}
          <Badge> {deliveryDuration}</Badge>
          <Text flex="2" fontWeight="600" textAlign="right">
            {Math.round(price * 100) / 100} Kč
          </Text>
        </Flex>
      </Radio>
    </Box>
  );
}

export default DeliveryOption;
