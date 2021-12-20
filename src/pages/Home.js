import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { GiAutoRepair, GiSpiderWeb } from 'react-icons/gi';
import { FaWindows } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';
import useGlobalContext from '../context';
const Home = () => {
  const { data } = useGlobalContext();
  const featured = data.filter((item) => item.isFeatured);
  const services = [
    {
      id: 2,
      title: 'computer repair',
      icon: <GiAutoRepair className='icon' />,
      info: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus repudiandae libero optio modi, error distinctio accusantium voluptate nisi sit? Repudiandae provident mollitia quo laboriosam nostrum quod consequuntur, alias libero!',
    },
    {
      id: 3,
      title: 'windows installation',
      icon: <FaWindows className='icon' />,
      info: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus repudiandae libero optio modi, error distinctio accusantium voluptate nisi sit? Repudiandae provident mollitia quo laboriosam nostrum quod consequuntur, alias libero!',
    },
    {
      id: 4,
      title: 'trade  computer gadgets',
      icon: <MdOutlineSell className='icon' />,
      info: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus repudiandae libero optio modi, error distinctio accusantium voluptate nisi sit? Repudiandae provident mollitia quo laboriosam nostrum quod consequuntur, alias libero!',
    },
    {
      id: 1,
      title: 'web development',
      icon: <GiSpiderWeb className='icon' />,
      info: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus repudiandae libero optio modi, error distinctio accusantium voluptate nisi sit? Repudiandae provident mollitia quo laboriosam nostrum quod consequuntur, alias libero!',
    },
  ];
  return (
    <>
      <Header>
        <Banner>
          <Link to={`/category/all`} className='btn'>
            explore
          </Link>
        </Banner>
      </Header>
      <article className='services'>
        <Title title='services rendered' />
        <div className='services-container'>
          {services.map((service) => {
            const { info, icon, title, id } = service;
            return (
              <div key={id} className='service'>
                {icon}
                <h3>{title}</h3>
                <p>{info}</p>
              </div>
            );
          })}
        </div>
      </article>
      <Title title='featured products' />
      <div className='featured-products'>
        {featured.map((item) => {
          return (
            <Link key={item.id} to={`/category/${item.category}`}>
              <article className='featured-item'>
                <div className='fetured-img'>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className='featured-footer'>
                  <h6>
                    {item.title}
                    <p>as low as {`$${item.price}`}</p>
                  </h6>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
