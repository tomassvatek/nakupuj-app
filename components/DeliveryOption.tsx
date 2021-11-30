import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Radio, RadioProps } from "@chakra-ui/radio";
import { formatPrice } from '../utils/formatters';

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
        {/* colorScheme="green" _focus={{ ring: 2, ringColor: "green.300" }} */}
        <Flex w="100%" pl="5" align="center" justify="space-between" my={py} mr="1" >
          <Text flex="6" fontWeight="600">
            {title}
          </Text>
          <Text flex="2" fontWeight="600" textAlign="right" pr={5}>
            {formatPrice(price)}
          </Text>
        </Flex>
      </Radio>
    </Box>
  );
}

export default DeliveryOption;
