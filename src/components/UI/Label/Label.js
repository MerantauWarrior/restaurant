import React from 'react';
import style from './Label.module.css';

function Label(props) {
  return (
    <span className={style.label}>{props.children}</span>
  );
}

export default Label;