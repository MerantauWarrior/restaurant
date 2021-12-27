import React from 'react';
import styles from './PoweredBy.module.css';
import pLogo from './Powered-by.png';

function PoweredBy() {
  return (
    <div className={styles.poweredBy}>
      <img src={pLogo} alt="pLogo" />
    </div>
  );
}

export default PoweredBy;