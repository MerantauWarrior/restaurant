import React from 'react';
import Result from "../../components/Result/Result";
import icon from '../PaymentSuccessful/icon.svg';
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import style from './PayCard.module.css';

function PayCard(props) {
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
        <Title bolder>Pay by debit/credit card</Title>
        <div className={style.input}>
          <Input type={'text'} name={'card'} id={'card'} placeholder={'Your card number'} disabled={false}
                 label={'Card Number'} error={'This field is required'} required={true}/>
        </div>
        <div className={`${style.input} ${style.inputCombined}`}>
          <Input type={'text'} name={'date'} id={'date'} placeholder={'MM / YY'} disabled={false}
                 label={'Exp. Date'} error={'This field is required'} required={true}/>
          <Input type={'text'} name={'cvv'} id={'cvv'} placeholder={'CVV'} disabled={false}
                 label={'CVV'} error={'This field is required'} required={true}/>
        </div>
        <div className={style.btn}>
          <Button dark>Pay $52.22</Button>
        </div>
      </Modal>
    </>
  );
}

export default PayCard;