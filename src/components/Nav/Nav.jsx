import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  return (
    <div className='navbar'>
      <Link className='link' to='/'>
        To Do's
      </Link>
      <Link className='link' to='/add'>
        Add To Do
      </Link>
    </div>
  )
};

export default Nav;