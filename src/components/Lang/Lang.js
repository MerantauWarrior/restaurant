import React, {useState} from 'react';
import style from './Lang.module.css';
import Fader from "../UI/Fader/Fader";
import {ReactComponent as Arrow} from "./arrow.svg";
import enF from "./en.svg";
import deF from "./de.svg";
import frF from "./fr.svg";
import itF from "./it.svg";
import ruF from "./ru.svg";
import {ReactComponent as Selected} from "./selected.svg";

function Lang(props) {
  const langs = [
    {
      lang: 'English',
      flag: enF
    },
    {
      lang: 'French',
      flag: frF
    },
    {
      lang: 'German',
      flag: deF
    },
    {
      lang: 'Italian',
      flag: itF
    },
    {
      lang: 'Russian',
      flag: ruF
    },
  ];

  const [state, setLang] = useState({
    lang: 'English',
    flag: enF
  });
  const [isOpened, setIsOpened] = useState(false);
  const itemHandler = (item) => {
    setLang({
      lang: item.lang,
      flag: item.flag
    });
    setIsOpened(false);
  }
  return (
    <>
      <div className={style.lang}>
        <div className={style.current} onClick={() => setIsOpened(!isOpened)}>
          <div className={style.flag}><img src={state.flag} alt={state.lang}/></div>
          <div className={style.text}>{state.lang}</div>
          <div className={isOpened ? style.arrowOpened : null}><Arrow/></div>
        </div>
        {isOpened ? <div className={style.list}>
          {langs.map(item => {
            const isActive = item.lang === state.lang ? style.itemActive : null;
            return (
              <div className={`${style.item} ${isActive}`} key={item.lang} onClick={() => itemHandler(item)}>
                <div className={style.flag}><img src={item.flag} alt={item.lang}/></div>
                <div className={style.text}>{item.lang}</div>
                <div className={style.selected}>{isActive ? <Selected/> : null}</div>
              </div>
            )
          })}
        </div> : null}
      </div>
      {isOpened ? <Fader/> : null}
    </>
  );
}

export default Lang;