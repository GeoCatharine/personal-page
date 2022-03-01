import React, { Fragment, FunctionComponent, useState } from 'react';
import { BurgerProps } from '../Nav';

const BurgerMenu: FunctionComponent<BurgerProps> = ({ setBurgerActive, burgerActive }) => {
  const about = '\$\{ ...about \}'
  const proof = '\$\{ ...proofs \}'
  const contact = '\$\{ ...follow \}'

  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);
    setBurgerActive(!burgerActive);
  };
  

  return (
    <Fragment>
      <div className={`full-page burger-menu-move ${burgerActive ? 'show' : 'hide'}`}/>
      <div className={`burger-menu burger-menu-move ${burgerActive ? 'show' : 'hide'}`}>
        <ul>
          <li>
              <a href='#about' onClick={toggleClass} >{about}</a>
          </li>
          <li>
              <a href='#proofs' onClick={toggleClass} >{proof}</a>
          </li>
          <li>
              <a href='#follow' onClick={toggleClass} >{contact}</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BurgerMenu;

