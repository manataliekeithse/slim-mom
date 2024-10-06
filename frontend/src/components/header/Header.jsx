import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

const Header = () => {
  const { isAuthenticated, username, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span className={css.brand}>Slim</span>
        <span>Mom</span>
      </div>

      <nav className={`${css.nav} ${menuOpen ? css.open : ''}`}>
        {isAuthenticated ? (
          <>
            <div className={css.leftMenu}>
              <NavLink to="/diary" activeClassName="active">
                Diary
              </NavLink>
              <NavLink to="/calculator" activeClassName="active">
                Calculator
              </NavLink>
            </div>
            <div className={css.rightMenu}>
              <span>{username}</span>
              <button onClick={logOut}>Exit</button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" activeClassName="active">
              Log in
            </NavLink>
            <NavLink to="/registration" activeClassName="active">
              Registration
            </NavLink>
          </>
        )}
      </nav>

      {/* Burger icon for mobile/tablet */}
      <button className={css.burger} onClick={toggleMenu}>
        <span className={css.burgerIcon}></span>
      </button>
    </header>
  );
};

export default Header;
