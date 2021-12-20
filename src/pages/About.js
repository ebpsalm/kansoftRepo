import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Header>
        <Banner>
          <Link to='/' className='btn'>
            explore
          </Link>
        </Banner>
      </Header>
    </>
  );
};

export default About;
