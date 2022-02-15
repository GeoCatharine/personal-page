import { useState } from "react";

const Follow = () => {
  const [changeButton, setChangeButton] = useState('email me')

  function copyEmail() {
    navigator.clipboard.writeText('v.nahornakova@gmail.com');
    setChangeButton('copied to clipboard!')
  }


  return (
    <div className='contact-container'>
      <h1>FollowMe.tsx</h1>
      <p>{'// contact info'}</p>
      <a onClick={copyEmail}>
        <img data-aos='flip-up' data-aos-delay="300" src='mail-darkmode.png' /> 
        {changeButton}
      </a>
      <p>{'// some links'}</p>
      <a><img data-aos='flip-up' data-aos-delay="300" src='git-lightmode.png' /> git me</a>
    </div>
  );
};

export default Follow;
