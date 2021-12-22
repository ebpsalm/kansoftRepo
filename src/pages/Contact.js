import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Title from '../components/Title'

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
      <Title title='cantact us for tech needs'/>
      <div className='contact-us'>
        <article className='info'>
          <div className='single-info'>
            <FaHome className='contact-icon' />
            <div className='info-text'>
              <h4>robert mugabe road hardy123</h4>
              <p>kampala, uganda hexen</p>
            </div>
          </div>
          <div className='single-info'>
            <FaEnvelope className='contact-icon' />
            <div className='info-text'>
              <h4>+256780847899</h4>
              <p>monday to friday, 10.00hrs - 18.00hrs</p>
            </div>
          </div>
          <div className='single-info'>
            <BsFillTelephoneFill className='contact-icon' />
            <div className='info-text'>
              <h4>psalmtech@gmail.com</h4>
              <p>place order via email</p>
            </div>
          </div>
        </article>
        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Type Name' />
          <input type='email' placeholder='example@gmail.com' />
          <input type='text' placeholder='Theme' />
          <textarea cols='50' rows='10'  placeholder='Message'></textarea>
          <button className='btn contact-btn'>send message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
