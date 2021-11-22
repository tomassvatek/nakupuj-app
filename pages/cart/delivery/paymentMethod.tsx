import React, { useState } from "react";
import { Box, Input, Radio, RadioGroup } from "@chakra-ui/react";

interface IProps {
  totalAmount: number;
}

const PaymentMethod: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState<string>("1");

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%" }}>
          <span style={{ fontSize: "2rem" }}>Platba</span>

          <RadioGroup
            onChange={setSelected}
            value={selected}
            style={{ paddingTop: "1rem" }}
          >
            <Radio value="1">Platba kartou</Radio>
            <Radio value="2">Platba kurýrovi na místě</Radio>
          </RadioGroup>

          {selected === "1" && (
            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ width: "30%" }}>
                <span>Číslo karty</span>
                <Input placeholder="Číslo karty" size="md" />
              </div>
              <div style={{ width: "30%", margin: "0 2rem" }}>
                <span>Datum vypršení</span>
                <Input placeholder="Datum vypršení" size="md" />
              </div>
              <div style={{ width: "10%" }}>
                <span>CVV</span>
                <Input placeholder="CCV" size="md" />
              </div>
            </div>
          )}

          <div style={{ padding: "2rem 0" }}>
            <span style={{ fontSize: "1.5rem" }}>
              Cena celkem: {props.totalAmount} Kč
            </span>
          </div>
        </div>
      </Box>
    </>
  );
};

export default PaymentMethod;
