import React, {useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Header/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Lang from "../../components/Lang/Lang";
import style from './Menu.module.css';


const menu = [
  {
    title: 'Hot Dog',
    description: '100% Grass fed beef, natural casing, our ketchup, mustard and relish',
    price: '14.00',
  },
  {
    title: 'Prime Beef Tips + Points',
    description: 'Melt in your month good and anything else that gets this to two lines of text',
    price: '26.00',
  },
  {
    title: 'Giant Prawns',
    description: 'Massive prawns drenched in butter and anything else that gets this to two lines of text',
    price: '18.00',
  },
  {
    title: 'Seared Diver Scallop',
    description: 'House made lardo served with blistered tomatoes and fresh arugula',
    price: '15.00',
  },
  {
    title: 'Vegan Lasagnette',
    description: '100% Grass fed beef, natural casing, our ketchup, mustard and relish',
    price: '11.00',
  },
  {
    title: 'Chicken Thigns',
    description: 'Cured Olives, Capers, Citrus and WIne infusion and ',
    price: '19.00',
  },
];

const navigation = ['All', 'Appetizers', 'Salads', 'Combo Meals'];

function Menu(props) {
  const [selected, setSelecterd] = useState(0);
  return (
    <Wrapper>
      <Header>
        <Navigation title={'Menu'}/>
      </Header>
      <Main>
        <div className={style.menuWrapper}>
          <div className={style.menu}>
            {navigation.map((item, index) => {
              const selectedClass = selected === index ? style.selected : '';
              return <div key={index} className={`${style.menuItem} ${selectedClass}`}
                          onClick={() => setSelecterd(index)}>{item}</div>
            })}
          </div>
        </div>
        <div className={style.items}>
          {menu.map((item, index) => (
            <div className={style.item} key={index}>
              <div className={style.top}>
                <div className={style.title}>{item.title}</div>
                <div className={style.price}><span className={style.priceSign}>$</span>{item.price}</div>
              </div>
              <div className={style.text}>{item.description}</div>
            </div>
          ))}
        </div>
      </Main>
      <Lang/>
    </Wrapper>
  );
}

export default Menu;