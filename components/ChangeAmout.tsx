import { HStack } from "@chakra-ui/layout";
import { Button, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";

export type ChangeAction = "increment" | "decrement" | "set";

type ChangeEvent = {
  action: ChangeAction;
  value?: number;
};

export interface ChangeAmountHandler {
  (changeEvent: ChangeEvent): void
};

type ChangeAmountProps = {
  value?: number;
  defaultValue?: number;
  onAmoutChange: ChangeAmountHandler;
  min?: number;
  max?: number;
};

function ChangeAmount({ defaultValue, value, onAmoutChange: onAmountChange, min = 0, max = 100 }: ChangeAmountProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue,
      value,
      min,
      max,
      onChange: (_, value) => onAmountChange({ action: 'set', value }),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });

  return (
    <HStack maxW="150px">
      <Button {...dec}>
        -
      </Button>
      <Input {...input} />
      <Button {...inc}>
        +
      </Button>
    </HStack>
  );
}

export default ChangeAmount;
