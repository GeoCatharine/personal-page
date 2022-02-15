import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1500' className='footer-content'>
        <div className='made-with'>
          <ul>
            <li className='code'>{'( Made with: ) => {'}</li>
            <li>React.js || Next.js;</li>
            <li>AntDesign;</li>
            <li>Sass;</li>
            <li>AOS Library;</li>
            <li className='code'>{'};'}</li>
          </ul>
          <ul>
            <li className='code'>{'( It took: ) => {'}</li>
            <li>3 weeks of coding;</li>
            <li>5 days of googling;</li>
            <li>14 lunch breaks;</li>
            <li>2 lazy days;</li>
            <li>1 mental breakdown(antd);</li>
            <li className='code'>{'};'}</li>
          </ul>
        </div>
        <div className='links'>
          
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Made by <span>Victoria Valentine</span> &copy; 2022</p>
      </div>
    </div>
  );
};

export default Footer;
