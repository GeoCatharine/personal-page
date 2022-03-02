import React, { Fragment } from 'react';
import Nav from '../components/Nav';

const Custom404 = () => {
  return (
    <Fragment>
      <Nav />
      <div className='err-container'>
      <h1>404 - Page not found</h1>
      <img src='err.png' />
      <p>{'//'} same as my experience {":')"}</p>
    </div>
    </Fragment>
  );
};

export default Custom404;
