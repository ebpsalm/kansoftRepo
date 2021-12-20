import React from 'react';
import Title from '../components/Title';

const Banner = ({ children }) => {
  return (
    <div className='banner'>
      <Title title='psalm tech' />
      <p>best of tech at your door step</p>
      {children}
    </div>
  );
};

export default Banner;
