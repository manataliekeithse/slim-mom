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

        {/* Desktop and Tablet Navigation */}
        <nav className={css.nav}>
          {' '}
          {isAuthenticated ? (
            <>
              <NavLink
                to="/diary"
                className={({ isActive }) =>
                  isActive ? css.active : css.inactive
                }
              >
                | Diary
              </NavLink>
              <NavLink
                to="/calculator"
                className={({ isActive }) =>
                  isActive ? css.active : css.inactive
                }
              >
                Calculator
              </NavLink>
            </>
          ) : (
            <div className={css.nav2}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? css.active : css.inactive
                }
              >
                | Log in
              </NavLink>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive ? css.active : css.inactive
                }
              >
                Registration
              </NavLink>
            </div>
          )}
        </nav>
      </div>

      <div className={css.rightSection}>
        {isAuthenticated ? (
          <>
            <span>{username}</span> |<NavLink onClick={logOut}>Exit</NavLink>
            <button className={css.burger} onClick={toggleMenu}>
              <span className={css.burgerIcon}></span>
            </button>
          </>
        ) : null}
      </div>

      {/* Collapsible Menu for Mobile View (only when logged in) */}
      {isAuthenticated && menuOpen && (
        <nav className={css.collapsibleMenu}>
          <NavLink
            to="/diary"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            | Diary
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Calculator
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
