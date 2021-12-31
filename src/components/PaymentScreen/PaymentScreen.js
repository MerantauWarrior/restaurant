import React from 'react';
import style from './PaymentScreen.module.css';

export function PaymentTop(props) {
  return (
    <div className={style.header}>
      {props.children}
    </div>
  );
}

export function Content(props) {
  return (
    <div className={style.content}>
      {props.children}
    </div>
  );
}

export function PaymentRow(props) {
  const final = props.final ? style.final : null;
  return (
    <div className={`${style.item} ${final}`}>
      {props.children}
    </div>
  );
}

export function Price(props) {
  return (
    <div className={style.price}>
      {props.children}
    </div>
  );
}

export function Methods(props) {
  return (
    <div className={style.methods}>
      {props.children}
    </div>
  );
}

export function Buttons(props) {
  return (
    <div className={style.btns}>
      {props.children}
    </div>
  );
}

export function PaymentScreen(props) {
  return (
    <div className={style.wrapper}>
      {props.children}
    </div>
  );
}