import React from 'react';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import style from './SplitBill.module.css';
import Navigation from "../../components/Header/Navigation/Navigation";

function SplitBill(props) {
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <div className={style.split}>
          <div className={style.splitTable}><Text>Table 12</Text></div>
          <div className={style.splitTitle}><Title>Split the bill</Title></div>
          <div className={style.splitText}><Text>Select how to split for your entire table, then encourage other guests to pay.</Text></div>
          <div className={style.splitBtns}>
            <Button dark>Pay custom amount</Button>
            <Button light>Pay by items</Button>
            <Button transparent>Split evenly</Button>
          </div>
        </div>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default SplitBill;