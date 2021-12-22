import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import useGlobalContext from '../context';
import Footer from '../components/Footer';

const Checkout = () => {
  const { data } = useGlobalContext();
  const display = data.filter((item) => item.inCart);
  const total = display.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header>
        <Banner>
          <Link to={`/category/all`} className='btn'>
            explore
          </Link>
        </Banner>
      </Header>
      <Title title='checkout your cart' />
      <div className='featured-products checkout'>
        {display.map((item) => {
          return (
            <article key={item.id} className='featured-item'>
              <div className='featured-img'>
                <img src={item.img} alt={item.title} />
              </div>
              <div className='featured-footer'>
                <h6>name: {item.title}</h6>
                <h6>company: {item.company}</h6>
                <p>
                  <span>price</span>: {`$${item.price}`}
                </p>
                <p>
                  <span>info</span>: {item.info}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {display.legth < 1 ? (
        <p>there are no items to checkout</p>
      ) : (
        <form className='checkout-form' onSubmit={handleSubmit}>
          <h4>customer information</h4>
          <div className='field'>
            <label htmlFor='name'>name: </label>
            <input type='text' name='name' id='name' placeholder='name' />
          </div>
          <div className='field'>
            <label htmlFor='email'>email: </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='example@gmail.com'
            />
          </div>
          <h4>payment information</h4>
          <div className='field'>
            <label htmlFor='card'>card: </label>
            <input
              type='text'
              name='card'
              id='card'
              placeholder='credit card number'
            />
          </div>
          <button className='btn'>{`pay $${total}`}</button>
        </form>
      )}

      <Footer />
    </>
  );
};

export default Checkout;
