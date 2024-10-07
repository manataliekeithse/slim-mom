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
      <div className={css.leftSection}>
        <div className={css.logo}>
          <img src={logo} alt="logo" />
          <span className={css.slim}>Slim</span>
          <span className={css.mom}>Mom</span>
        </div>

        <nav className={`${css.nav} ${menuOpen ? css.open : ''}`}>
          {' '}
          {isAuthenticated ? (
            <>
            
                <NavLink
                  to="/diary"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  | Diary
                </NavLink>
                <NavLink
                  to="/calculator"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  Calculator
                </NavLink>
              
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                | Log in
              </NavLink>
              <NavLink
                to="/registration"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Registration
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {isAuthenticated && (
        <div className={css.rightMenu}>
          <span>{username}</span> |<NavLink onClick={logOut}>Exit</NavLink>
        </div>
      )}

      {/* Burger icon for mobile/tablet */}
      <button className={css.burger} onClick={toggleMenu}>
        <span className={css.burgerIcon}></span>
      </button>
    </header>
  );
};

export default Header;
