import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function ButtonTV() {
  return (
    <Link to='SEARCHTV'>
      <button className='btn'>Search TV</button>
    </Link>

  );
}
