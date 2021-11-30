import { VStack } from "@chakra-ui/layout";
import { RadioGroup } from "@chakra-ui/react";
import DeliveryOption, { DeliveryOptionItem } from "./DeliveryOption";

type DeliveryOptionsProps = {
  cartOptions: DeliveryOptionItem[];
  radioValue: string | number;
  onChange: (optionId: string) => void;
};

function DeliveryOptions({
  cartOptions,
  radioValue,
  onChange,
}: DeliveryOptionsProps) {
  return (
    <RadioGroup value={radioValue} onChange={onChange}>
      <VStack w="100%" align="flex-start" justifyContent="flex-start">
        {cartOptions.map((prop) => {
          const bg = radioValue == prop.optionId ? "gray.100" : undefined;
          return <DeliveryOption key={prop.optionId} bgColor={bg} optionId={prop.optionId} title={prop.title} radioValue={radioValue} deliveryDuration={prop.deliveryDuration} save={prop.save} price={prop.price} />;
        })}
      </VStack>
    </RadioGroup>
  );
}

export default DeliveryOptions;
