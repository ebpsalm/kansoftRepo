import React from 'react';
import logo from '../img/logomain.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: '/about', text: 'about' },
    { id: 3, url: '/contact', text: 'contact' },
    { id: 4, url: '/checkout', text: 'checkout' },
  ];
  return (
    <>
      <nav className='navbar'>
        <div className='nav-query'>
          <img src={logo} alt='logo' />
          {
            !showSideBar && 
          <FaBars
            className='bars-icon btn'
            onClick={() => {
              setShowSideBar(true)
            }}
          />
          }
        </div>
        <div className='links-container'>
          <ul className='links'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {showSideBar && (
        <div className='side-bar'>
          <button className='btn' onClick={() => setShowSideBar(false)}>
            <FaTimes />
          </button>
          <ul className='links'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url} onClick={()=> setShowSideBar(false)}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
