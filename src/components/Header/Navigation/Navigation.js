import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './Navigation.module.css';
import {ReactComponent as Back} from './arrow.svg';

function Navigation(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.navigation}>
      <Back onClick={() => navigate(-1)}/>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.empty}/>
    </div>
  );
}

export default Navigation;