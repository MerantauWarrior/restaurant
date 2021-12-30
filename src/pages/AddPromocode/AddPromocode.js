import React from 'react';
import Result from "../../components/Result/Result";
import icon from '../PaymentSuccessful/icon.svg';
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import style from './AddPromocode.module.css';

function AddPromocode(props) {
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
        <Title bolder>Do you have a promo code?</Title>
        <div className={style.input}>
          <Input type={'text'} name={'code'} id={'code'} placeholder={'Enter your promo code'} disabled={false}
                 label={'Promo Code'} error={null} required={true}/>
        </div>
        <Button dark>Apply</Button>
      </Modal>
    </>
  );
}

export default AddPromocode;