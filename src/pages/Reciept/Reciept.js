import React from 'react';
import {useNavigate} from "react-router-dom";
import icon from "./icon.svg";
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import Result from "../../components/Result/Result";

function Reciept(props) {
  const navigate = useNavigate();
  const backHome = () => navigate('/', { replace: true });
  return (
    <Result img={icon}>
      <Title>The receipt has been sent</Title>
      <Text>Please check your mail.</Text>
      <>
        <Button dark btnHandler={backHome}>Back to the home screen</Button>
      </>
    </Result>
  );
}

export default Reciept;