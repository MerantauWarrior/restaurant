import React from 'react';
import style from './home.module.css';
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Logo from "../../components/Header/Logo/Logo";
import PoweredBy from "../../components/PoweredBy/PoweredBy";

function Home(props) {
  return (
    <Wrapper>
      <Header>
        <Logo/>
      </Header>
      <Main>
        main
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default Home;