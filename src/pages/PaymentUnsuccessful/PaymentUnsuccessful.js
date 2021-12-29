import React from 'react';
import Result from "../../components/Result/Result";
import icon from "./icon.svg";
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";

function PaymentUnsuccessful(props) {
  return (
    <Result img={icon}>
      <Title>Payment Unsuccessful</Title>
      <Text>Unfortunately, your payment didn't succeed. Please try again.</Text>
      <>
        <Button dark>Try again</Button>
        <Button light>Skip payment</Button>
      </>
    </Result>
  );
}

export default PaymentUnsuccessful;