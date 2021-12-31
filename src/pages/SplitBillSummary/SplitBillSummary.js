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
import style from './SplitBillSummary.module.css';
import Radio from "../../components/UI/Radio/Radio";
import Label from "../../components/UI/Label/Label";

function SplitBillSummary(props) {
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <PaymentScreen>
          <PaymentTop>
            <Text>Table 12</Text>
            <div className={style.title}>
              <Title bolder>Order Summary</Title>
            </div>
          </PaymentTop>
          <Content>
            <div className="asd">
              <PaymentRow>
                <Text>Subtotal</Text>
                <Price><span>$</span>45.54</Price>
              </PaymentRow>
              <PaymentRow>
                <Text>Sales tax</Text>
                <Price><span>$</span>11.90</Price>
              </PaymentRow>
              <PaymentRow>
                <Text>Discount <Label>-10%</Label></Text>
                <Price>-<span>$</span>5.22</Price>
              </PaymentRow>
              <PaymentRow final>
                <Title bolder small>Total</Title>
                <Price>-<span>$</span><span className="text-medium">52.22</span></Price>
              </PaymentRow>
            </div>
          </Content>
          <Methods>
            <Title small bolder>Payment Method</Title>
            <Radio name={'method'} id={'card'} label={'Debit / Credit Card'} required={true} checked={true}
                   value={'card'}/>
            <Radio name={'method'} id={'apple'} label={'Apple Pay'} required={true} checked={false} value={'apple'}/>
          </Methods>
          <Buttons>
            <Button dark>Pay 52.22</Button>
            <Button light>Add a tip</Button>
          </Buttons>
        </PaymentScreen>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default SplitBillSummary;