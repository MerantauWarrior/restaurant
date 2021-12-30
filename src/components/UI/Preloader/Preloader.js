import React from 'react';
import style from './Preloader.module.css';
import Fader from "../Fader/Fader";

function Preloader(props) {
  return (
    <Fader>
      <div className={style.preloader}>
        <div className={style.spiner}/>
      </div>
    </Fader>
  );
}

export default Preloader;