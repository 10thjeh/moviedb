import React, { useState } from 'react';
import { Button } from './Button';
import { ButtonTV } from './aButton';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownGenre from './DropdownGenre';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownmenu, setDropdownMenu] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterMenu = () => {
    if (window.innerWidth < 960) {
      setDropdownMenu(false);
    } else {
      setDropdownMenu(true);
    }
  };

  const onMouseLeaveMenu = () => {
    if (window.innerWidth < 960) {
      setDropdownMenu(false);
    } else {
      setDropdownMenu(false);
    }
  };

  return (

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
            onMouseEnter={onMouseEnterMenu}
            onMouseLeave={onMouseLeaveMenu}
          >
            <Link
              to='/GENRE'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              GENRE <i className='fas fa-caret-down' />
            </Link>
            {dropdownmenu && <DropdownGenre />}
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
              to='/AboutUS'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to='/SEARCH'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
				  >
					  Search Movie
            </Link>
			  </li>
        <li>
            <Link
              to='/SEARCHTV'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Search TV
            </Link>
			  </li>
        </ul>
		  <Button />
		  <ButtonTV />
      </nav>

  );
}

export default Navbar;
