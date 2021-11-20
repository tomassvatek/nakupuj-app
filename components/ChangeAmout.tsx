import { HStack } from "@chakra-ui/layout";
import { Button, Input, InputProps, useNumberInput } from "@chakra-ui/react";
import React, { useRef } from "react";

export type ChangeAction = "increment" | "decrement";

export type ChangeEvent = {
  value: number;
  action: ChangeAction;
};

type ChangeAmountProps = {
  defaultValue: number;
  onAmoutChange: (changeEvent: ChangeEvent) => void;
};

function ChangeAmount({ defaultValue, onAmoutChange }: ChangeAmountProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: defaultValue,
      min: 1,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });

  function changeAmount(action: ChangeAction) {
    if (!inputRef?.current) return;

    onAmoutChange({ value: +inputRef.current.value, action: action });
  }

  return (
    <HStack maxW="150px">
      <Button onChange={() => changeAmount("decrement")} {...dec}>
        -
      </Button>
      <Input ref={inputRef} {...input} />
      <Button onChange={() => changeAmount("increment")} {...inc}>
        +
      </Button>
    </HStack>
  );
}

export default ChangeAmount;
