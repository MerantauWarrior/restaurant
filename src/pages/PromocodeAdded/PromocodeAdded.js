import React from 'react';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Title from "../../components/UI/Title/Title";
import Text from "../../components/UI/Text/Text";
import Button from "../../components/UI/Button/Button";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navigation from "../../components/Header/Navigation/Navigation";
import {
  PaymentScreen,
  Content,
  Buttons,
  Methods,
  PaymentTop,
  PaymentRow,
  Price
} from "../../components/PaymentScreen/PaymentScreen";
import style from './PromocodeAdded.module.css';
import Radio from "../../components/UI/Radio/Radio";
import Label from "../../components/UI/Label/Label";

function PromocodeAdded(props) {
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <PaymentScreen>
          <PaymentTop>
            <Text>Your table total</Text>
            <div className={style.title}>
              <Title bolder>$52.22</Title>
            </div>
          </PaymentTop>
          <Content>
            <div className="asd">
              <PaymentRow>
                <Text>Salade de tomates vertes et pastèque <span className="text-primary">x 1</span></Text>
                <Price><span>$</span>14.00</Price>
              </PaymentRow>
              <PaymentRow>
                <Text>Soupe du jour <span className="text-primary">x 1</span></Text>
                <Price><span>$</span>5.10</Price>
              </PaymentRow>
              <PaymentRow>
                <Text>Escargots au pistou <span className="text-primary">x 1</span></Text>
                <Price><span>$</span>22.00</Price>
              </PaymentRow>
              <PaymentRow>
                <Text>Le burger au fromage <span className="text-primary">x 1</span></Text>
                <Price><span>$</span>11.12</Price>
              </PaymentRow>
              <PaymentRow final>
                <Text>
                  <span className="text-primary">Promo code</span>
                  <Label>-10%</Label>
                </Text>
                <Price>-<span>$</span>5.22</Price>
              </PaymentRow>
            </div>
          </Content>
          <Methods>
            <Title small bolder>Payment Method</Title>
            <Radio name={'method'} id={'card'} label={'Debit / Credit Card'} required={true} checked={false}
                   value={'card'}/>
            <Radio name={'method'} id={'apple'} label={'Apple Pay'} required={true} checked={true} value={'apple'}/>
          </Methods>
          <Buttons>
            <Button dark>Pay $46.99</Button>
            <Button light>Split the bill</Button>
            <Button transparent>Add a tip</Button>
          </Buttons>
        </PaymentScreen>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default PromocodeAdded;