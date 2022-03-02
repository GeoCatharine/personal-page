import Link from "next/link";

const Proofs = () => {
  return (

    <div className='proofs-container' id="proofs">
      <h1>Proofs.tsx</h1>
      <p>{'//'} click button to open certificates in new tab</p>
      <div className='proofs-buttons'>
        <Link href={'https://ik.imagekit.io/exnrqllbuq7s/certif-javascript_Il6hds3mb.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1644920174023'}>
          <a data-aos="fade-right" data-aos-duration="1000" className='btn' rel={'noreferrer'} target={'_blank'}>Html, CSS & Javascript</a>
        </Link>
        <Link href={'https://ik.imagekit.io/exnrqllbuq7s/certifi-js-es6_EFISFUxgwS.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1644920174178'}>
          <a data-aos="fade-left" data-aos-duration="1000" data-aos-offset="250" className='btn' rel={'noreferrer'} target={'_blank'}>ES6</a>
        </Link>
        <Link href={'https://ik.imagekit.io/exnrqllbuq7s/certifi-sass_9nZ_dlqy24.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1644920173873'}>
          <a data-aos="fade-right" data-aos-duration="1000" data-aos-offset="250" className='btn' rel={'noreferrer'} target={'_blank'} >Sass</a>
        </Link >
        <Link href={'https://ik.imagekit.io/exnrqllbuq7s/certifi-tailwind_TigwvANBcs8.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1644920173581'}>
          <a data-aos="fade-left" data-aos-duration="1000" data-aos-offset="250" className='btn' rel={'noreferrer'} target={'_blank'} >Tailwind</a>
        </Link>
        <Link href={'https://ik.imagekit.io/exnrqllbuq7s/certifi-vue_rb1J4QAh2.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1644920173625'}>
          <a data-aos="fade-right" data-aos-duration="1000" data-aos-offset="250" className='btn' rel={'noreferrer'} target={'_blank'} >Vue</a>
        </Link>
      </div>
    </div>
  );
};

export default Proofs;
