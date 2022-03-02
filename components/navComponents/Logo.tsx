import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a className='logo'>
        <h1 className='brackets'>{'{'}</h1>
          <div className='logoText'>
            <h1>Victoria</h1>
            <h1>Valentine</h1>
          </div>
          <h1 className='brackets'>{'}'}</h1>
        </a>
      </Link>
      </div>
  );
};

export default Logo;
