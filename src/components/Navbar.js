import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownGenre from './DropdownGenre';
import DropdownYear from './DropdownYear';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         BOBA THEATER
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/GENRE'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              GENRE <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <DropdownGenre />}
          </li>
          <li className='nav-item'>
            <Link
              to='/BEST'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BEST RATING
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/YEAR'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              YEAR <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <DropdownYear/>}
          </li>
          <li>
            <Link
              to='/SEARCH'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              SEARCH
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
