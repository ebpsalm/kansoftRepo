import React from 'react';
import logo from '../img/logomain.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links-container '>
        <button type='button' className='btn'>
          <FaTimes />
        </button>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        </ul>
      </div>
      <button type='button' className='btn'>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
