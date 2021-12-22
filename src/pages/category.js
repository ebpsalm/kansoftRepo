import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import useGlobalContext from '../context';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from '../components/Footer';

const Category = () => {
  const { data, addToCart } = useGlobalContext();
  const { type } = useParams();
  let display;
  let displayedType;
  if (type === 'all') {
    display = data;
  } else {
    display = data.filter((item) => item.category === type);
    displayedType = type.charAt(type.length - 1) === 's' ? type : `${type}s`;
  }
  return (
    <>
      <Header>
        <Banner></Banner>
      </Header>
      <Title
        title={type !== 'all' ? ` ${displayedType} in store` : 'store'}
      ></Title>
      <div className='featured-products margin'>
        {display.map((item) => {
          return (
            <article key={item.id} className='featured-item'>
              <div className='featured-img'>
                <img src={item.img} alt={item.title} />
                <button className='btn' onClick={() => addToCart(item.id)}>
                  <FaShoppingCart />
                </button>
              </div>
              <div className='featured-footer2'>
                <h6>{item.title}</h6>
                <p>{`$${item.price}`}</p>
              </div>
            </article>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Category;
