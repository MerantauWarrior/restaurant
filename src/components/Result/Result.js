import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import styles from './Result.module.css';

function Result(props) {
  return (
    <Wrapper>
      <Header/>
      <Main>
        <div className={styles.result}>
          <img className={styles.img} src={props.img} alt={props.img} />
          <div className={styles.title}>{props.children[0]}</div>
          <div className={styles.text}>{props.children[1]}</div>
          <div className={styles.btns}>{props.children[2]}</div>
        </div>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default Result;