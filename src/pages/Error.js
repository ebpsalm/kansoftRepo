import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

const Error = () => {
  return (
    <>
      <Header>
        <Banner>
          <Title title='sorry its a dead end' />
          <Link to='/' className='btn'>
            back home
          </Link>
        </Banner>
      </Header>
    </>
  );
};

export default Error;
