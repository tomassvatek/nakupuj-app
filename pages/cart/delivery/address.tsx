import {
  Box,
  Input,
  HStack,
  useRadioGroup,
  useRadio,
  Select,
  Text
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import React, { useState } from "react";

const Address: React.FC = () => {
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [deliveryTime, setDeliveryTime] = useState<string>("");

  function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
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
    const options = ["Dnes", "Zítra", "Pozítří"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: "react",
      onChange: console.log,
    });

    const group = getRootProps();

    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    );
  }

  const Map = dynamic(
    () => import('../../../components/Map'),
    { ssr: false }
  )

  return (
    <>
      <Text fontSize="xl" fontWeight="bold">Adresa</Text>
      <Input
        placeholder="Doručovací adresa"
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
        <Select placeholder="Vyberte čas dodání" size="md" isRequired>
          <option value="8:00">8:00</option>
          <option value="9:00">9:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </Select>
      </div>
    </>
  );
};
export default Address;
