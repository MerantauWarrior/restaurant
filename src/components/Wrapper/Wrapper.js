import React from 'react';
import styles from './Wrapper.module.css';

function Wrapper(props) {
  return (
    <div className={styles.wrapper}>{props.children}</div>
  );
}

export default Wrapper;