import {
  Box,
  Input,
  HStack,
  useRadioGroup,
  useRadio,
  Select,
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

  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function Example() {
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
      <span style={{ fontSize: "2rem" }}>Adresa</span>
      <Input
        placeholder="Doručovací adresa"
        size="md"
        style={{ margin: "1rem 0" }}
      />
      <Map />
      <span>Vyberte den dodání</span>
      <div style={{ padding: "1rem 0" }}>
        <Example />
      </div>
      <span>Vyberte čas dodání</span>
      <div style={{ padding: "1rem 0" }}>
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
