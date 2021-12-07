import React from "react";
import { Text, Radio } from "@chakra-ui/react";
import { formatPrice } from '../../utils/formatters';
import { InputControl, RadioGroupControl } from 'formik-chakra-ui';
import { addGaps, addSlash } from '../../utils/inputFormatters';
import { useField, useFormikContext } from 'formik';

interface IProps {
  totalAmount: number;
}

const PaymentMethod: React.FC<IProps> = (props) => {
  const [field] = useField('deliveryType');
  const { values } = useFormikContext<any>();

  return (
    <>
      <Text fontSize="xl" fontWeight="bold" mt={5}>Platba</Text>
      <RadioGroupControl
        name="deliveryType"
        style={{ paddingTop: "1rem" }}
      >
        <Radio value="1">Platba kartou</Radio>
        <Radio value="2" ml={3}>Platba kurýrovi na místě</Radio>
      </RadioGroupControl>

      {field.value === "1" && (
        <div style={{ display: "flex", paddingTop: "1rem" }}>
          <div style={{ width: "60%" }}>
            <InputControl name="cardNumber" label="Číslo karty" isRequired={true} inputProps={{ placeholder: '1234 1234 1234 1234', maxLength: 19, value: addGaps(values.cardNumber) }} />
          </div>

          <div style={{ width: "20%", margin: "0 2rem" }}>
            <InputControl name="expiration" label="Datum vypršení" isRequired={true} inputProps={{ placeholder: '12/34', value: addSlash(values.expiration) }} />
          </div>

          <div style={{ width: "20%" }}>
            <InputControl name="cvv" label="CVV" isRequired={true} inputProps={{ placeholder: '123', maxLength: 4 }} />
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
