import { Timeline } from 'antd';
import React from 'react';

const AboutCV = () => {
  return (
    <section className='cv'>
        <div className='cv-header' id='about'>
          <h1>CurriculumVitae.tsx</h1>
        </div>
        <div className='cv-container'>
          <div className='cv-content'>
            <div className='top-info'>
              <div className='side-info'>
                <h2># Basic Info:</h2>
                <p><span>Name: </span> Viktória Nahorňaková</p>
                <p><span>Date of Birth: </span> 24.02.1995</p>
                <p><span>Current location: </span> Košice, Slovakia</p>
              </div>
              <div className='backstory'>
                <h2># Backstory: </h2>
                <p>My first encounter with a code was, when i managed a personal blog at age 13. Instead of filling it with content, i had much more fun figuring out layouts, templates and designing whole page with some basic hmtl & css. Even though i took differnt route in life, ive come full circle right back, behind screen staring at code, ready to learn and make every page i touch, better. </p>
              </div>
            </div>
            <div className='content'>
              <div>
                <h2># Timeline:</h2>
                <Timeline mode={'left'} style={{ width: '100%',marginTop: '50px', color: 'aliceblue' }}>
                  <Timeline.Item label="2010-2014">Stredná súkromná umelecká škola filmová </Timeline.Item>
                  <Timeline.Item label="2014-2015">Caffee Deldia {'{'} <br />{'barista };' } </Timeline.Item>
                  <Timeline.Item label="2015-2015">Keltská Krčma {'{'} <br /> {'barista && barman && waitress };' } </Timeline.Item>
                  <Timeline.Item label="2016-2019">RegioJet {'{'} <br /> {'steward && teamlead };'} </Timeline.Item>
                  <Timeline.Item label="2020-2020">At&t {'{'} <br /> { 'Technical Support };'} </Timeline.Item>
                </Timeline>
              </div>
              <div className='skills'>
                <h2># Skills:</h2>
                <div className='skills-container'>
                  <div className='card'>
                    <img src='html-css-darkmode.webp' alt='html css icon'/>
                    <p>It didnt take me long to get used to html & css, since i already had some basic understanding how websites work. I absolved 70 hour long udemy couse, just to get a hang of what i can do and what are latest good practices. After that, i knew the right way for me will be front-end web developing.</p>
                  </div>
                  <div className='card'>
                    <img src='javascript-darkmode.webp' alt='javascript icon'/>
                    <p>This was a huge mountain to climb, and for sure, the one i will be climbing forever. Learning through exercises, courses and just writing as much code as i can. I encounter jQuery on my way, but we decided, after a while, to not stay in touch. </p>
                  </div>
                  <div className='card'>
                    <img src='vue-darkmode.webp' alt='vuejs icon'/>
                    <p>Vue was match made in heaven. That might be because of my obssesion of organizing the code. Just a basic idea of component with html, functionality and css on single file, was what got me. The lifecycle and props is just cherry on top. </p>
                  </div>
                  <div className='card'>
                    <img src='sass-darkmode.webp' alt='sass icon'/>
                    <div className='skill-textbox'>
                    <p className='decor'>{'//'} and other CSS hacks</p>
                    <p>I stared to look into Sass, same time as i started my road with Vue. Even through i enjoyed the scoped scss for little tweaks, the ability of functions, mixins and vars aboslutely dominated the way i write my CSS now. I also tried out Bootstrap and Tailwind couple of times, in order to find suitable framework, although Im still on a hunt.</p>
                    </div>
                  </div>
                  <div className='card'>
                    <img src='react-darkmode.webp' alt='react icon'/>
                   <div className='skill-textbox'>
                    <p className='decor'>{'//'} with typescript</p>
                    <p>React is newest addition, i can already see potential for larger scale projects, however we are still getting to know each other. In order to be more confortable with writing in React, i would have to write much more projects in future and thats the main reason, behind the decision, to write my page in library im not 100% familiar with. </p>
                   </div>
                  </div>
                  <div className='skillbox-else'>
                    <h1>..etc..</h1>
                    <p className='decor'>Pros:</p>
                    <p>From previous experieces i can definetly say im team player, im good with time managment and my biggest positive characteristic is, i know that i dont know. I dont overestimate my ablities, there is no shame of not knowing and asking. I would much rather ask hundred times and do my job right than eyeball it and fail. Also doublechecking is nice. </p>
                    <p className='decor'> Cons:</p>
                    <p>I can be slow in terms of work, mostly because i have perfectionis eye and can get stuck on single pixel aligning not as i desire. Also we have to count in my lack of experience, however im positive thats something that will solve itself throu time and code. </p>
                  </div>
                </div>
              </div>
              <div className='downloadCV'>
                <h2># CV</h2>
                <div className='btn-box'>
                  <a data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="250" rel={'noreferrer'} target={'_blank'} href='https://ik.imagekit.io/exnrqllbuq7s/CV_V_Nahornakova2021_HXk48JoKi.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1646301104296' > Download </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
  );
};

export default AboutCV;
