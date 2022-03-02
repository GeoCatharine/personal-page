import React from 'react';

const AboutHeader = () => {
  return (
    <section className='jumbotron'>
      <div className='jumbo-photo-container'>
        <img data-aos="fade-right" data-aos-delay='500' data-aos-duration='1500' src='photo.jpeg' alt='photo'/>
      </div>
      <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1500' className='jumbo-text-container'>
        <p>
          <div className='text-decor'>{'<p>'}</div>
          Hi! My name is Victoria, 
          <br />
          Im self-thought junior front-end developer from Slovakia and this page, 
          although still in process of making, 
          is little showcase of my code and what i can do.
          Even though my coding journey is still at beginning, I cant wait to learn more, 
          google harder and show off my skills here.
          <div className='text-decor'>{'</p>'}</div>
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
