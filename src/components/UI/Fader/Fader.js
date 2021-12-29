import React from 'react';
import style from './Fader.module.css';

function Fader(props) {
  return (
    <div className={style.fader}>{props.children}</div>
  );
}

export default Fader;