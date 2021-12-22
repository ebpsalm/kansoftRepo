import React from 'react';
import Header from '../components/Header';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
import history from '../img/history.jpg';
// import goals from '../img/goals.jpg';
import employees from '../img/employees.jpg';

const About = () => {
  const [active, setActive] = useState('0');
  let image;
  if (active === '0') {
    image = history;
  } else if (active === '1') {
    image = employees;
  } else {
    image = goals;
  }
  return (
    <>
      <Header>
        <Banner>
          <Link to='/' className='btn'>
            explore
          </Link>
        </Banner>
      </Header>
      <div className='about'>
        <div className='tabs'>
          <div className='tabs-header'>
            <h2
              data-id='0'
              className={`btn ${active === '0' && 'active'}`}
              onClick={(e) => setActive(e.target.dataset.id)}
            >
              history
            </h2>
            <h2
              data-id='1'
              className={`btn ${active === '1' && 'active'}`}
              onClick={(e) => setActive(e.target.dataset.id)}
            >
              employment
            </h2>
            <h2
              data-id='2'
              className={`btn ${active === '2' && 'active'}`}
              onClick={(e) => setActive(e.target.dataset.id)}
            >
              goals
            </h2>
          </div>
          <div className='tabs-body'>
            <p className={`btn ${active === '0' && 'active'}`}>
              <span>our history</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quidem laboriosam magnam, officia optio asperiores
              libero aperiam debitis illum maxime ex odio, sint, provident
              impedit inventore hic quod tempore eius consectetur id reiciendis
              et assumenda. Vero dolor numquam, ut magnam ratione dignissimos
              corrupti eius inventore deleniti veritatis perspiciatis dolorum in
              totam aliquam quae optio culpa dolorem commodi amet voluptate id
              harum quasi animi. Aperiam ad cupiditate repellat id veritatis
              minus culpa adipisci placeat laborum accusamus. Incidunt debitis
              placeat a iste aspernatur fugiat quibusdam. Blanditiis similique,
              eveniet mollitia facere distinctio et sunt minus iure voluptatibus
              rerum sequi adipisci at exercitationem a.
            </p>
            <p className={`btn ${active === '1' && 'active'}`}>
              <span>our employees</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quidem laboriosam magnam, officia optio asperiores
              libero aperiam debitis illum maxime ex odio, sint, provident
              impedit inventore hic quod tempore eius consectetur id reiciendis
              et assumenda. Vero dolor numquam, ut magnam ratione dignissimos
              corrupti eius inventore deleniti veritatis perspiciatis dolorum in
              totam aliquam quae optio culpa dolorem commodi amet voluptate id
              harum quasi animi. Aperiam ad cupiditate repellat id veritatis
              minus culpa adipisci placeat laborum accusamus. Incidunt debitis
              placeat a iste aspernatur fugiat quibusdam. Blanditiis similique,
              eveniet mollitia facere distinctio et sunt minus iure voluptatibus
              rerum sequi adipisci at exercitationem a.
            </p>
            <p className={`btn ${active === '2' && 'active'}`}>
              <span>our goals</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quidem laboriosam magnam, officia optio asperiores
              libero aperiam debitis illum maxime ex odio, sint, provident
              impedit inventore hic quod tempore eius consectetur id reiciendis
              et assumenda. Vero dolor numquam, ut magnam ratione dignissimos
              corrupti eius inventore deleniti veritatis perspiciatis dolorum in
              totam aliquam quae optio culpa dolorem commodi amet voluptate id
              harum quasi animi. Aperiam ad cupiditate repellat id veritatis
              minus culpa adipisci placeat laborum accusamus. Incidunt debitis
              placeat a iste aspernatur fugiat quibusdam. Blanditiis similique,
              eveniet mollitia facere distinctio et sunt minus iure voluptatibus
              rerum sequi adipisci at exercitationem a.
            </p>
          </div>
        </div>
        <div className='about-img'>
          <img src={image} alt='about us' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
