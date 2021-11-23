import { Flex, Stack, VStack } from "@chakra-ui/layout";
import { Box, Text, Radio, RadioGroup, SimpleGrid } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import DeliveryOption, { DeliveryOptionItem } from "./DeliveryOption";
import { deliveryOptions } from "../constants";

type DeliveryOptionsProps = {
  radioValue: string | number;
  innerRadioValue: string | number;
  onChange: (optionId: string) => void;
  onInnerOptionChange: (optionId: string) => void;
};

function DeliveryOptions({
  radioValue,
  innerRadioValue,
  onChange,
  onInnerOptionChange,
}: DeliveryOptionsProps) {
  const options = useMemo<DeliveryOptionItem[]>(() => deliveryOptions, []);

  return (
    <RadioGroup value={radioValue} onChange={onChange}>
      <VStack w="100%" align="flex-start" justifyContent="flex-start">
        {options.map((prop) => {
          const bg = radioValue == prop.optionId ? "gray.100" : undefined;
          if (prop?.childrenOptions) {
            return (
              <VStack w="100%">
                <DeliveryOption key={prop.optionId} bgColor={bg} {...prop} />
                {radioValue == "3" && (
                  <Box w="100%" pl="80px">
                    <RadioGroup
                      value={innerRadioValue}
                      onChange={onInnerOptionChange}
                    >
                      {prop.childrenOptions.map((option) => (
                        <DeliveryOption
                          key={option.optionId}
                          py="2"
                          {...option}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                )}
              </VStack>
            );
          }
          return <DeliveryOption key={prop.optionId} bgColor={bg} {...prop} />;
        })}
      </VStack>
    </RadioGroup>
  );
}

export default DeliveryOptions;
