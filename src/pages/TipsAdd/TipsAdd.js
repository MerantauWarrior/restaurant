import React, {useState} from 'react';
import style from './TipsAdd.module.css';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Header/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Text from "../../components/UI/Text/Text";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import PoweredBy from "../../components/PoweredBy/PoweredBy";
import Wrapper from "../../components/Wrapper/Wrapper";
import Input from "../../components/UI/Input/Input";
import {ReactComponent as IconMoney} from "./icon-1.svg";

function TipsAdd(props) {
  const [variant, setVariant] = useState('6.25');
  const variantHandler = (value) => {
    setVariant(value === '' || 0 ? '0' : value);
  }
  return (
    <Wrapper>
      <Header>
        <Navigation/>
      </Header>
      <Main>
        <div className={style.wrapper}>
          <Text>Table 12</Text>
          <div className={style.title}>
            <Title bolder>Add a tip</Title>
          </div>
          <div className={style.variants}>
            <input type="radio" name="variant" id="v1" defaultValue={'6.25'} onChange={(e)=>variantHandler(e.target.value)} defaultChecked={true}/>
            <label className={style.variant} htmlFor={'v1'}>
              <span className={style.percent}>15%</span>
              <span className={style.amount}>$6.25</span>
            </label>
            <input type="radio" name="variant" id="v2" defaultValue={'7.50'} onChange={(e)=>variantHandler(e.target.value)} defaultChecked={false}/>
            <label className={style.variant} htmlFor={'v2'}>
              <span className={style.percent}>18%</span>
              <span className={style.amount}>$7.50</span>
            </label>
            <input type="radio" name="variant" id="v3" defaultValue={'8.30'} onChange={(e)=>variantHandler(e.target.value)} defaultChecked={false}/>
            <label className={style.variant} htmlFor={'v3'}>
              <span className={style.percent}>20%</span>
              <span className={style.amount}>$8.30</span>
            </label>
            <input type="radio" name="variant" id="v4" defaultValue={'10.42'} onChange={(e)=>variantHandler(e.target.value)} defaultChecked={false}/>
            <label className={style.variant} htmlFor={'v4'}>
              <span className={style.percent}>25%</span>
              <span className={style.amount}>$10.42</span>
            </label>
          </div>
          <div className={style.divider}>
            <span className={style.dividerLine}/>
            <span className={style.dividerText}>or</span>
            <span className={style.dividerLine}/>
          </div>
          <div className={style.custom}>
            <Input type={'text'} name={'tips'} id={'tips'} placeholder={'0.00'} disabled={false}
                   label={'Add a custom tip'} error={null} required={true} withIcon icon={<IconMoney/>} change={(e)=>variantHandler(e.target.value)}/>
          </div>
          <div className={style.btns}>
            <Button dark>Continue with a ${variant} tip</Button>
            <Button light>Continue without a tip</Button>
          </div>
        </div>
        <PoweredBy/>
      </Main>
    </Wrapper>
  );
}

export default TipsAdd;