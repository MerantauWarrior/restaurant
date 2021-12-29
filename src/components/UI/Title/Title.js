import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  const bolder = props.bolder ? styles.titleBolder : '';
  return (
    <div className={`${styles.title} ${bolder}`}>{props.children}</div>
  );
}

export default Title;