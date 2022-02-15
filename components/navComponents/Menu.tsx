import Link from 'next/link';
import React, { Fragment, FunctionComponent } from 'react';
import { BurgerProps } from '../Nav';

const BurgerMenu: FunctionComponent<Partial<BurgerProps>> = ({ burgerActive }) => {
  const about = '\$\{ ...about \}'
  const proof = '\$\{ ...proofs \}'
  const contact = '\$\{ ...follow \}'

  return (
    <Fragment>
      <div className={`full-page burger-menu-move ${burgerActive ? 'show' : 'hide'}`}/>
      <div className={`burger-menu burger-menu-move ${burgerActive ? 'show' : 'hide'}`}>
        <ul>
          <li>
            <Link href='/about'>
              <a>{about}</a>
            </Link>
          </li>
          <li>
            <Link href='/proof'>
              <a>{proof}</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>{contact}</a>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BurgerMenu;
