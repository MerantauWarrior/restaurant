import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from '../SplitBill/SplitBill.module.css';
import style from './SplitBillEvently.module.css';
import Navigation from "../../components/Header/Navigation/Navigation";
import Modal from "../../components/UI/Modal/Modal";
import {ReactComponent as Minus} from "./minus-ico.svg";
import {ReactComponent as Plus} from "./plus-ico.svg";

function SplitBillEvently(props) {
  const [state, setNewState] = useState({
    qty: 4,
    total: 52.22
  });
  const btnHandler = (counter) => {
    setNewState((prevState) => ({...prevState, qty: parseInt(prevState.qty + counter)}));
  }
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <div className={styles.split}>
          <div className={styles.splitTable}><Text>Table 12</Text></div>
          <div className={styles.splitTitle}><Title>Split the bill</Title></div>
          <div className={styles.splitText}><Text>Select how to split for your entire table, then encourage other guests
            to pay.</Text></div>
          <div className={styles.splitBtns}>
            <Button dark>Pay custom amount</Button>
            <Button light>Pay by items</Button>
            <Button transparent>Split evenly</Button>
          </div>
        </div>
        <PoweredBy/>
      </Main>
      <Modal>
        <Title bolder>Split evenly</Title>
        <div className={style.text}><Text>Select the number of guests</Text></div>
        <div className={style.box}>
          <div className={style.controls}>
            <div className={style.btn} onClick={() => btnHandler(-1)}><Minus/></div>
            <div className={style.qty}>{state.qty}</div>
            <div className={style.btn} onClick={() => btnHandler(+1)}><Plus/></div>
          </div>
          <div className={style.total}>
            <Text><span className={style.totalText}>${parseFloat(state.total / state.qty).toFixed(2)} / each</span></Text>
          </div>
        </div>
        <Button dark>Confirm</Button>
      </Modal>
    </Wrapper>
  );
}

export default SplitBillEvently;