import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  const bolder = props.bolder ? styles.bolder : '';
  const small = props.small ? styles.small : '';
  return (
    <div className={`${styles.title} ${bolder} ${small}`}>{props.children}</div>
  );
}

export default Title;