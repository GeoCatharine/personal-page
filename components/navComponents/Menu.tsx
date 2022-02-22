import Link from 'next/link';
import React, { Fragment, FunctionComponent, MouseEvent } from 'react';
import { BurgerProps } from '../Nav';

const BurgerMenu: FunctionComponent<Partial<BurgerProps>> = ({ burgerActive }) => {
  const about = '\$\{ ...about \}'
  const proof = '\$\{ ...proofs \}'
  const contact = '\$\{ ...follow \}'


  const handleScroll2 = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <div className={`full-page burger-menu-move ${burgerActive ? 'show' : 'hide'}`}/>
      <div className={`burger-menu burger-menu-move ${burgerActive ? 'show' : 'hide'}`}>
        <ul>
          <li>
              <a href='#about' onClick={handleScroll2}>{about}</a>
          </li>
          <li>
              <a href='#proof'>{proof}</a>
          </li>
          <li>
              <a href='#follow'>{contact}</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BurgerMenu;
