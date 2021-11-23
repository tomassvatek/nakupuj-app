import React, { useState } from "react";
import { Text, FormControl, FormLabel, Input, Radio, RadioGroup } from "@chakra-ui/react";
import { formatPrice } from '../../../utils/formatters';

interface IProps {
  totalAmount: number;
}

const PaymentMethod: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState<string>("1");

  return (
    <>
      <Text fontSize="xl" fontWeight="bold" mt={5}>Platba</Text>
      <RadioGroup
        onChange={setSelected}
        value={selected}
        style={{ paddingTop: "1rem" }}
      >
        <Radio value="1">Platba kartou</Radio>
        <Radio value="2" ml={3}>Platba kurýrovi na místě</Radio>
      </RadioGroup>

      {selected === "1" && (
        <div style={{ display: "flex", paddingTop: "1rem" }}>
          <div style={{ width: "60%" }}>
            <FormControl id="cardNumber">
              <FormLabel>Číslo karty</FormLabel>
              <Input type="text" size="md" placeholder="1234 1234 1234 1234" />
            </FormControl>
          </div>

          <div style={{ width: "20%", margin: "0 2rem" }}>
            <FormControl id="expiration">
              <FormLabel>Datum vypršení</FormLabel>
              <Input type="text" size="md" placeholder="12/34" />
            </FormControl>
          </div>

          <div style={{ width: "20%" }}>
            <FormControl id="cvv">
              <FormLabel>CVV</FormLabel>
              <Input type="text" size="md" placeholder="123" />
            </FormControl>
          </div>
        </div>
      )}

      <div style={{ padding: "2rem 0" }}>
        <span style={{ fontSize: "1.5rem" }}>
          Cena celkem <strong>{formatPrice(props.totalAmount)}</strong>
        </span>
      </div>
    </>
  );
};

export default PaymentMethod;
