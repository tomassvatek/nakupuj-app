import { HStack } from "@chakra-ui/layout";
import { Button, Input, InputProps, useNumberInput } from "@chakra-ui/react";
import React, { useRef } from "react";

export type ChangeAction = "increment" | "decrement";

export type ChangeEvent = {
  action: ChangeAction;
};

type ChangeAmountProps = {
  defaultValue: number;
  onAmoutChange: (changeEvent: ChangeEvent) => void;
};

function ChangeAmount({ defaultValue, onAmoutChange }: ChangeAmountProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: defaultValue,
      min: 0,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });

  function changeAmount(action: ChangeAction) {
    onAmoutChange({ action });
  }

  return (
    <HStack maxW="150px">
      <Button onClick={() => changeAmount("decrement")} {...dec}>
        -
      </Button>
      <Input {...input} />
      <Button onClick={() => changeAmount("increment")} {...inc}>
        +
      </Button>
    </HStack>
  );
}

export default ChangeAmount;
