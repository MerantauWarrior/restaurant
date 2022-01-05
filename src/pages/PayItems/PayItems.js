import React, {useState} from 'react';
import style from './PayItems.module.css';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Header/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from '../SplitBill/SplitBill.module.css';
import Modal from "../../components/UI/Modal/Modal";
import {ReactComponent as Arrow} from "./arrow.svg";

function PayItems(props) {
  const [items] = useState([
    {
      checked: true,
      qty: 1,
      name: 'Select how to split for your entire table, then encourage other guests to pay.',
      price: '14.00'
    },
    {
      checked: false,
      qty: 1,
      name: 'Soupe du jour',
      price: '5.10'
    },
    {
      checked: true,
      qty: 1,
      name: 'Escargots au pistou',
      price: '22.00'
    },
    {
      checked: true,
      qty: 1,
      name: 'Le burger au fromage',
      price: '11.12'
    }
  ])
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <div className={styles.split}>
          <div className={styles.splitTable}><Text>Table 12</Text></div>
          <div className={styles.splitTitle}><Title>Split the bill</Title></div>
          <div className={styles.splitText}><Text>as</Text></div>
          <div className={styles.splitBtns}>
            <Button dark>Pay custom amount</Button>
            <Button light>Pay by items</Button>
            <Button transparent>Split evenly</Button>
          </div>
        </div>
        <PoweredBy/>
      </Main>
      <Modal>
        <Title bolder>Pay by items</Title>
        <div className={style.text}>
          <Text>Please select items from the list <br/> for which you want will pay.</Text>
        </div>
        <div className={style.wrapper}>
          <div className={style.list}>
            {items.map((item, index) => (
              <div className={style.item} key={index}>
                <div className={style.row}>
                  <div className={style.checkboxWrapper}>
                    <input type="checkbox" name={`i${index}`} id={`i${index}`} defaultChecked={item.checked}/>
                    <label htmlFor={`i${index}`} className={style.checkbox}/>
                  </div>
                  <div className={style.qty} onClick={()=>console.log('clicked')}>
                    <div className={style.qtyText}>x {item.qty}</div>
                    <Arrow/>
                  </div>
                </div>
                <div className={`${style.row} ${style.info}`}>
                  <Text>{item.name}</Text>
                  <div className={style.price}><span className={style.priceSign}>$</span>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.total}>
            <div className={style.row}>
              <Title small bolder>Total</Title>
              <div className={`${style.price} ${style.priceBold}`}><span className={style.priceSign}>$</span>47.12</div>
            </div>
          </div>
          <Button dark>Confirm</Button>
        </div>
      </Modal>
    </Wrapper>
  );
}

export default PayItems;