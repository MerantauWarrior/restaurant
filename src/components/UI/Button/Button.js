import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const btnType = props.dark ? styles.dark : props.light ? styles.light : props.transparent ? styles.transparent : '';
  return (
    <button className={`${styles.btn} ${btnType}`} onClick={props.btnHandler}>{props.children}</button>
  );
}

export default Button;