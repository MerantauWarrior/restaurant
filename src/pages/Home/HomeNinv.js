import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Logo from "../../components/Header/Logo/Logo";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import style from './Home.module.css';

function HomeNinv(props) {
  return (
    <Wrapper>
      <Header>
        <Logo/>
      </Header>
      <Main>
        <div className={`${style.home} ${style.homeNinv}`}>
          <div className={style.homeNinvTable}><Text>Table 12</Text></div>
          <div className={style.homeNinvTitle}><Title bolder>Your table has not yet<br/> been invoiced</Title></div>
          <div className={style.homeNinvText}>
            <Text>Most likely you haven't ordered anything yet. Please see our menu to make your order.</Text><br/>
            <Text>If you have already made an order, you should wait for a little while the bill is displayed in the system.</Text>
          </div>
          <Button dark>View menu</Button>
        </div>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default HomeNinv;