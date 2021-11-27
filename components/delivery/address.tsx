import {
  Box,
  HStack,
  useRadio,
  Text,
  VStack,
  useRadioGroupContext
} from "@chakra-ui/react";
import { InputControl, RadioGroupControl } from 'formik-chakra-ui';
import dynamic from 'next/dynamic'
import React from "react";

const Map = dynamic(
  () => import('../Map'),
  { ssr: false }
)

const deliveryDays = ["Dnes", "Zítra", "Pozítří"];
const deliveryTimes = [
  [
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
  ],
  [
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ]
];

const Address: React.FC = () => {
  function RadioCard(props: any) {
    const group = useRadioGroupContext()
    const { value: valueProp } = props
  
    let isChecked = props.isChecked
    if (group?.value != null && valueProp != null) {
      isChecked = group.value === valueProp
    }
  
    let onChange = group?.onChange;
  
    const name = props?.name ?? group?.name
  
    const {
      getInputProps,
      getCheckboxProps,
      htmlProps,
    } = useRadio({
      ...props,
      isChecked,
      onChange,
      name,
    })
  
    const checkboxProps = getCheckboxProps(htmlProps)
    const inputProps = getInputProps()

    return (
      <Box as="label">
        <input {...inputProps} />
        <Box
          {...checkboxProps}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "green.500",
            color: "white",
            borderColor: "green.500",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  function DeliveryDayPicker() {
    return (
      <RadioGroupControl name="deliveryDay">
        <HStack>
          {deliveryDays.map((value) => {
            return (
              <RadioCard key={value} value={value}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </RadioGroupControl>
    );
  }

  function DeliveryTimePicker() {
    return (
      <RadioGroupControl name="deliveryTime">
        <VStack alignItems="flex-start">
          {deliveryTimes.map((group, index) => (
            <HStack key={index} flexWrap="wrap">
              {group.map((value) => (
                <RadioCard key={value} value={value}>
                  {value}
                </RadioCard>
              ))}
            </HStack>
          ))}
        </VStack>
      </RadioGroupControl>
    );
  }

  return (
    <>
      <Text fontSize="xl" fontWeight="bold">Adresa</Text>
      <InputControl
        name="deliveryAddress"
        inputProps={{ placeholder: 'Doručovací adresa' }}
        size="md"
        style={{ margin: "0.5rem 0" }}
      />
      <Map />
      <Text mt={5} fontSize="xl" fontWeight="bold">Vyberte den dodání</Text>
      <div style={{ padding: "0.5rem 0", paddingBottom: "" }}>
        <DeliveryDayPicker />
      </div>
      <Text mt={5} fontSize="xl" fontWeight="bold">Vyberte čas dodání</Text>
      <div style={{ padding: "0.5rem 0" }}>
        <DeliveryTimePicker />
      </div>
    </>
  );
};
export default Address;
