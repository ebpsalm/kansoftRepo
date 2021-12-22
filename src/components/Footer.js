import React from 'react';
import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <article className='footer'>
      <h4>contact us</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aut
        iusto suscipit minus, tenetur quisquam accusamus autem porro nam
        blanditiis molestiae officia similique ad recusandae. Alias, odit! Quia
        odit ipsa necessitatibus fugiat nihil voluptatum voluptas facilis
        deleniti at veritatis earum, harum cum officia rem voluptatibus
        excepturi fuga voluptatem eos ullam?
      </p>
      <div className='icons-container'>
        <FaFacebook className='btn' />
        <FaTwitter className='btn' />
        <FaInstagram className='btn' />
        <FaLinkedin className='btn' />
      </div>
      <p className='copyright'>
        <span>ebpsalm. </span>
        all rights reserved <FaRegCopyright />
      </p>
    </article>
  );
};

export default Footer;
