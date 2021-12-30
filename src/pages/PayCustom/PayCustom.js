import React from 'react';
import Result from "../../components/Result/Result";
import icon from '../PaymentSuccessful/icon.svg';
import {ReactComponent as IconMoney} from './icon-1.svg';
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import style from './PayCustom.module.css';

function PayCustom(props) {
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
        <Title bolder>Pay custom amount</Title>
        <div className={style.text}>
          <Text>The maximum custom amount<br/>for for your table is $52.22</Text>
        </div>
        <div className={style.input}>
          <Input type={'text'} name={'amount'} id={'amount'} placeholder={'Enter custom amount'} disabled={false}
                 label={'Custom Amount'} error={null} required={true} withIcon icon={<IconMoney/>}/>
        </div>
        <Button dark>Confirm</Button>
      </Modal>
    </>
  );
}

export default PayCustom;