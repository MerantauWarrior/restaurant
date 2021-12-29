import React from 'react';
import Header from "../../components/Header/Header";
import Logo from "../../components/Header/Logo/Logo";
import Main from "../../components/Main/Main";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import style from './Home.module.css';

function HomeInv(props) {
  return (
    <Wrapper>
      <Header>
        <Logo/>
      </Header>
      <Main>
        <div className={`${style.home} ${style.homeInv}`}>
          <div className={style.homeInvTitle}><Title>Xaloc Tapas Bar</Title></div>
          <div className={style.homeInvPrice}><Title bolder>$52.22</Title></div>
          <div className={style.homeInvText}><Text>Your table total</Text></div>
          <>
            <Button dark>View & pay the bill</Button>
            <Button light>View menu</Button>
          </>
        </div>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default HomeInv;