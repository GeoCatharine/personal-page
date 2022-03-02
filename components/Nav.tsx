import { useState } from 'react';
import Menu from './navComponents/Menu';
import MenuIcon from './navComponents/MenuIcon';
import Logo from './navComponents/Logo';
import useMenuToggle from '../hooks/useMenuToggle';

export type BurgerProps = {
  isMenuActive: boolean;
  setMenuActive: Function;
}

const Nav = () => {
  const [toggleMenu, isActive] = useMenuToggle()

  return (
    <div className='nav'>
      <Logo />
        <MenuIcon
          isMenuActive = {isActive}
          setMenuActive = {toggleMenu}
        />
        <Menu
          isMenuActive = {isActive}
          setMenuActive = {toggleMenu}
        />
    </div>
  )
};

export default Nav;
