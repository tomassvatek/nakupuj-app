import { HStack } from "@chakra-ui/layout";
import { Button, Input, useNumberInput, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

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
  confirmDelete?: boolean;
};

function ChangeAmount({ defaultValue, value, onAmoutChange: onAmountChange, min = 0, max = 100, confirmDelete }: ChangeAmountProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue,
      value,
      min,
      max,
      onChange: (_, value) => onAmountChange({ action: 'set', value }),
    });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const inc = getIncrementButtonProps();
  const input = getInputProps({ readOnly: true });
  const dec: any = confirmDelete && (input as any).value === '1' && !showConfirmation ? undefined : getDecrementButtonProps();
  
  return (
    <HStack maxW="150px">
      {confirmDelete ? (
        <Tooltip isOpen={showConfirmation} label="Opravdu smazat položku?" bg="white" placement={"top-start"} color={"red.500"} fontSize={"1.2em"}>
          <Button {...dec} onBlur={() => setShowConfirmation(false)} onClick={(event) => {
            if (value === 1 && showConfirmation) {
              setShowConfirmation(false);
            } else {
              setShowConfirmation(true);
            }
          }}>
            -
          </Button>
        </Tooltip>
      ) : (
        <Button {...dec}>
          -
        </Button>
      )}
      <Input {...input} />
      <Button {...inc}>
        +
      </Button>
    </HStack>
  );
}

export default ChangeAmount;
