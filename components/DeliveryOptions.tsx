import { Flex, Stack, VStack } from "@chakra-ui/layout";
import { Box, Text, Radio, RadioGroup, SimpleGrid } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import DeliveryOption, { DeliveryOptionItem } from "./DeliveryOption";
import { deliveryOptions } from "../constants";

type DeliveryOptionsProps = {
  onChange: (deliveryOption: DeliveryOptionItem) => void;
};

function DeliveryOptions({ onChange }: DeliveryOptionsProps) {
  const [selectedValue, setSelectedValue] = useState("1");
  const [selectedInnerValue, setInnerSelectedValue] = useState("2");
  const options = useMemo<DeliveryOptionItem[]>(() => deliveryOptions, []);

  function handleChange(optionId: string) {
    setSelectedValue(optionId);
    const option = options.find((s) => s.optionId === optionId);
    if (option) onChange(option);
  }

  return (
    <RadioGroup value={selectedValue} onChange={handleChange}>
      <VStack w="100%" align="flex-start" justifyContent="flex-start">
        {options.map((prop) => {
          const bg = selectedValue == prop.optionId ? "gray.100" : undefined;
          if (prop?.childrenOptions) {
            return (
              <VStack w="100%">
                <DeliveryOption key={prop.optionId} bgColor={bg} {...prop} />
                {selectedValue == "3" && (
                  <Box w="100%" pl="80px">
                    <RadioGroup
                      value={selectedInnerValue}
                      onChange={setInnerSelectedValue}
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
