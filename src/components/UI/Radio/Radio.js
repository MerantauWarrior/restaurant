import React from 'react';
import style from './Radio.module.css';

function Radio(props) {
  return (
    <div className={style.radio}>
      <input type="radio" name={props.name} id={props.id} required={props.required} defaultChecked={props.checked}
             defaultValue={props.value} onChange={props.change}/>
      <label htmlFor={props.id} className={style.label}>{props.label}</label>
      <span className={style.circle}/>
    </div>
  );
}

export default Radio;