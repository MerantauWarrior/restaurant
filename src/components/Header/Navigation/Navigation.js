import React from 'react';
import styles from './Navigation.module.css';
import Back from "../Back/Back";
import Logo from "../Logo/Logo";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <Back/>
      {props.title ?
        <div className={styles.title}>{props.title}</div>
        :
        <Logo/>}
      <div className={styles.empty}/>
    </div>
  );
}

export default Navigation;