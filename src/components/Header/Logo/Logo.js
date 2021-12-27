import React from 'react';
import styles from './Logo.module.css';
import { ReactComponent as HeaderLogo } from './AppIcon.svg';

function Logo() {
  return (
    <HeaderLogo className={styles.logo}/>
  );
}

export default Logo;