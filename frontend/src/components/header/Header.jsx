import React, { useState } from 'react';
import logo from '../../images/slim-mom logo.png';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  const { isAuthenticated, username, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={css.header}>
      <div className={css.leftSection}>
        <div className={css.logo}>
			 <NavLink 
			 	to="/"
			 > 
          	<img src={logo} alt="logo" />
			 </NavLink>
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className={css.nav}>
          {' '}
          {isAuthenticated ? (
            <>
              <NavLink
                to="/diary"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                 Diary
              </NavLink>
              <NavLink
                to="/calculator"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Calculator
              </NavLink>
            </>
          ) : (
            <div className={css.nav2}>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
					 Log in
              </NavLink>
              <NavLink
                to="/registration"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
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
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            | Diary
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Calculator
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
