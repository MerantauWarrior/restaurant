import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Header/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Lang from "../../components/Lang/Lang";

function Menu(props) {
  return (
    <Wrapper>
      <Header>
        <Navigation title={'Menu'}/>
      </Header>
      <Main>
        main
      </Main>
      <Lang/>
    </Wrapper>
  );
}

export default Menu;