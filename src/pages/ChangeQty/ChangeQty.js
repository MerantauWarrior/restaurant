import React, {useState} from 'react';
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
import style from './ChangeQty.module.css';

function ChangeQty(props) {
  const variants = [1,2,3,4,5];
  const [variant, setVariant] = useState(1);
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <div className={styles.split}>
          <div className={styles.splitTable}><Text>Table 12</Text></div>
          <div className={styles.splitTitle}><Title>Split the bill</Title></div>
          <div className={styles.splitText}><Text></Text></div>
          <div className={styles.splitBtns}>
            <Button dark>Pay custom amount</Button>
            <Button light>Pay by items</Button>
            <Button transparent>Split evenly</Button>
          </div>
        </div>
        <PoweredBy/>
      </Main>
      <Modal>
        <Title bolder>Escargots au pistou</Title>
        <div className={style.text}>
          <Text>$22.00</Text>
        </div>
        <div className={style.select}>
          {variants.map((item, index) => {
            const selected = variant === item ? style.selected : '';
            return (
              <div key={index} className={`${style.item} ${selected}`} onClick={()=>setVariant(item)}>x {item}</div>
            )
          })}
        </div>
        <Button dark>Confirm</Button>
      </Modal>
    </Wrapper>
  );
}

export default ChangeQty;