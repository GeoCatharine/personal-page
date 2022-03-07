import React from 'react';

const AboutHeader = () => {
  return (
    <section className='jumbotron'>
      <div className='jumbo-photo-container'>
        <img data-aos="fade-right" data-aos-delay='500' data-aos-duration='1500' src='photo.webp' alt='photo'/>
      </div>
      <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1500' className='jumbo-text-container'>
      <div className='text-decor'>{'<p>'}</div>
        <p>
          Hi! My name is Victoria, 
          <br />
          I'm a self-thought junior front-end developer from Slovakia 
          and this page, although still in the process of making,
          is a little showcase of my code and what I can do.
          Even though my coding journey is still at the beginning, 
          I can't wait to learn more, google harder and show off my skills here.
        </p>
        <div className='text-decor'>{'</p>'}</div>
      </div>
    </section>
  );
};

export default AboutHeader;
