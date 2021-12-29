import React from 'react';
import Result from "../../components/Result/Result";
import icon from './icon.svg';
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";

function PaymentSuccessful(props) {
  return (
    <Result img={icon}>
      <Title>Payment Successful</Title>
      <Text>Thank you for your trust! You can also request a duplicate receipt to your email.</Text>
      <>
        <Button dark>Get a receipt</Button>
        <Button light>Skip a receipt</Button>
      </>
    </Result>
  );
}

export default PaymentSuccessful;