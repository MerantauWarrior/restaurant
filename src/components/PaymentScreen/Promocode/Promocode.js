import React from 'react';
import {ReactComponent as Add} from "./add.svg";
import style from './Promocode.module.css';
import Text from "../../UI/Text/Text";

function Promocode(props) {
  return (
    <div className={style.promocode} onClick={props.clicked}>
      <Add className={style.icon}/>
      <Text><span className="text-primary">{props.children}</span></Text>
    </div>
  );
}

export default Promocode;