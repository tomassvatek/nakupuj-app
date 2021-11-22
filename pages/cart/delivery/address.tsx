import {
  Box,
  Input,
  Image,
  HStack,
  useRadioGroup,
  useRadio,
  Select,
  FormControl,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Address: React.FC = () => {
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
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
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
      onChange: setDeliveryDate,
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

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%", paddingTop: "3rem" }}>
          <span style={{ fontSize: "2rem" }}>Adresa:</span>
          <FormControl id="address" isRequired>
            <Input
              placeholder="Doručovací adresa"
              size="md"
              style={{ margin: "1rem 0" }}
            />
          </FormControl>
          <Image
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
            alt="Segun Adebayo"
            style={{ marginBottom: "1rem", padding: "0 4rem" }}
          />
          <span>Vyberte den dodání:</span>
          <div style={{ padding: "1rem 0" }}>
            <FormControl id="day" isRequired>
              <Example />
            </FormControl>
          </div>
          <span>Vyberte čas dodání:</span>
          <div style={{ padding: "1rem 0" }}>
            <FormControl id="time">
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
            </FormControl>
          </div>
        </div>
      </Box>
    </>
  );
};
