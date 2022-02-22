import { useState } from "react";

const Follow = () => {
  const [changeButton, setChangeButton] = useState('email me')

  function copyEmail() {
    navigator.clipboard.writeText('v.nahornakova@gmail.com');
    setChangeButton('copied to clipboard!')
  }


  return (
    <div className='contact-container' id="follow">
      <h1>FollowMe.tsx</h1>
      <p>{'// contact info'}</p>
      <a onClick={copyEmail}>
        <img data-aos='flip-up' data-aos-delay="300" src='mail-darkmode.png' /> 
        {changeButton}
      </a>
      <p>{'// some other links'}</p>
      <div className="other-links">
        <a href="https://github.com/GeoCatharine" target={'_blank'} rel="noreferrer" ><img data-aos='flip-up' data-aos-delay="300" src='git-lightmode.png' /> git me</a>
        <a href="" target={'_blank'} rel="noreferrer" ><img data-aos='flip-up' data-aos-delay="300" src='linkedin-darkmode.png' /> link me</a>
      </div>
    </div>
  );
};

export default Follow;
