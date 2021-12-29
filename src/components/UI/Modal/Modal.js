import React, {useState} from 'react';
import Fader from "../Fader/Fader";
import {ReactComponent as CloseIcon} from './close.svg';
import style from './Modal.module.css';

function Modal(props) {
  const [isOpened, setIsOpened] = useState(true);
  return isOpened ? (
    <Fader>
      <div className={style.modal}>
        <CloseIcon className={style.close} onClick={() => setIsOpened(false)}/>
        {props.children}
      </div>
    </Fader>
  ) : null;
}

export default Modal;