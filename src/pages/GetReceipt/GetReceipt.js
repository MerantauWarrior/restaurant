import React from 'react';
import Result from "../../components/Result/Result";
import icon from '../PaymentSuccessful/icon.svg';
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import style from './GetReceipt.module.css';

function GetReceipt(props) {
  return (
    <>
      <Result img={icon}>
        <Title>Payment Successful</Title>
        <Text>Thank you for your trust! You can also request a duplicate receipt to your email.</Text>
        <>
          <Button dark>Get a receipt</Button>
          <Button light>Skip a receipt</Button>
        </>
      </Result>
      <Modal>
        <Title bolder>Get a receipt</Title>
        <div className={style.input}>
          <Input type={'email'} name={'email'} id={'email'} placeholder={'Enter your email'} disabled={false}
                 label={'Email'} error={null} required={true}/>
        </div>
        <Button dark>Send</Button>
      </Modal>
    </>
  );
}

export default GetReceipt;