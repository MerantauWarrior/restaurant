import React from 'react';
import style from './Input.module.css';

function Input(props) {
  const errClass = props.error ? style.inpError : '';
  return props.withIcon ? (
    <div>
      <label htmlFor={props.id} className={style.label}>{props.label}</label>
      <div className={`${style.withIcon} ${errClass}`}>
        <div className={style.icon}>{props.icon}</div>
        <input type={props.type} name={props.name} id={props.id} className={style.input} disabled={props.disabled}
               placeholder={props.placeholder} required={props.required} onChange={props.change} onBlur={props.blur}/>
      </div>
      {props.error ? <div className={style.error}>{props.error}</div> : null}
    </div>
  ) : (
    <div>
      <label htmlFor={props.id} className={style.label}>{props.label}</label>
      <input type={props.type} name={props.name} id={props.id} className={`${style.input} ${errClass}`} disabled={props.disabled}
             placeholder={props.placeholder} required={props.required} onChange={props.change} onBlur={props.blur}/>
      {props.error ? <div className={style.error}>{props.error}</div> : null}
    </div>
  );
}

export default Input;