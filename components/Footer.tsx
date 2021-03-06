import Link from 'next/link';
import React, { useState } from 'react';

const Footer = () => {

  return (
    <div className='footer-container' id="follow">
      <div className='footer-top'>
        <h1>FollowMe.tsx</h1>
        <p>{'// contact info'}</p>
      </div>
      <div className="contact-links">
        <a href="mailto:v.nahornakova@gmail.com" >
          <img data-aos='flip-up' data-aos-delay="300" src='mail-lightmode.webp' alt="email icon" /> 
          email me
        </a>
        <Link href="https://github.com/GeoCatharine">
          <a target={'_blank'} rel="noreferrer" ><img data-aos='flip-up' data-aos-delay="500" src='github-lightmode.svg' alt="github icon"/> git me</a>
        </Link>
        <Link href={'https://linkedin.com/in/viktoria-valentine'}>
          <a target={'_blank'} rel="noreferrer" ><img data-aos='flip-up' data-aos-delay="700" src='linkedin-lightmode.svg' alt="linkedin icon"/> link me</a>
        </Link>
      </div>
      <div className='footer-bottom'>
        <p>Made by <span>Victoria Valentine</span> &copy; 2022</p>
      </div>
    </div>
  );
};

export default Footer;
