import React, { Fragment, FunctionComponent } from 'react';
import { BurgerProps } from '../Nav';

const BurgerMenu: FunctionComponent<BurgerProps> = ({ isMenuActive, setMenuActive}) => {
  const about = '\$\{ ...about \}'
  const proof = '\$\{ ...proofs \}'
  const contact = '\$\{ ...follow \}'

  return (
    <Fragment>
      <div className={`full-page burger-menu-move ${isMenuActive ? 'show' : 'hide'}`}/>
      <div className={`burger-menu burger-menu-move ${isMenuActive ? 'show' : 'hide'}`}>
        <ul>
          <li>
              <a href='#about' onClick={() => setMenuActive()} >{about}</a>
          </li>
          <li>
              <a href='#proofs' onClick={() => setMenuActive()} >{proof}</a>
          </li>
          <li>
              <a href='#follow' onClick={() => setMenuActive()} >{contact}</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BurgerMenu;

