import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Header>
        <Banner>
          <Link to={`/category/all`} className='btn'>
            explore
          </Link>
        </Banner>
      </Header>
    </>
  );
};

export default Contact;
