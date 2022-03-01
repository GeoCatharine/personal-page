import { useState } from 'react';
import Menu from './navComponents/Menu';
import MenuIcon from './navComponents/MenuIcon';
import Logo from './navComponents/Logo';

export type BurgerProps = {
  setBurgerActive: Function;
  burgerActive: boolean;
}

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  return (
    <div className='nav'>
      <Logo />
        <MenuIcon 
          burgerActive={burgerActive}
          setBurgerActive = {setBurgerActive}
        />
        <Menu 
          burgerActive = {burgerActive}
          setBurgerActive = {setBurgerActive}
        />
    </div>
  )
};

export default Nav;
