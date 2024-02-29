import React from 'react';
import about from '../assets/media/about.png';
import  Infopropos  from '../assets/data/Infopropos.json';

import Banner from '../Components/Banner/Banner';
import Infopanel from '../Components/collapse/Infopanel';

function AboutPage() {
  return (
    <div>
      <Banner backgroundImage={about} />
      <div>
        <main className='apropos_main'>
          {Infopropos.map((item, index) => (
            <Infopanel
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default AboutPage;
