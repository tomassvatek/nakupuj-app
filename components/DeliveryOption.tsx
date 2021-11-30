import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Radio, RadioProps } from "@chakra-ui/radio";

export type DeliveryOptionItem = {
  optionId: number | string;
  title: string;
  deliveryDuration: string;
  price: number;
  save: number;
  bgColor?: string;
  py?: string;
  childrenOptions?: DeliveryOptionItem[];
  radioValue?: number | string;
};

type DeliveryOptionProps = RadioProps & DeliveryOptionItem;

function DeliveryOption({
  title,
  deliveryDuration,
  optionId,
  price,
  bgColor,
  py = "5",
  radioValue
}: DeliveryOptionProps) {
  return (
    <Box borderRadius="5px" w="100%" bg={bgColor} _hover={optionId == radioValue ? { bg: bgColor } : { bg: "gray.50" }}>
      <Radio w="100%" h="100%" value={optionId} pl="5">
        <Flex w="100%" pl="5" align="center" justify="space-between" my={py} mr="1" >
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
