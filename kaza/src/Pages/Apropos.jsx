import React, { useState } from 'react';
import about from '../assets/media/about.png';
import arrow from '../assets/logo/arrow.png';
import Banner from '../Components/Banner/Banner';

function InfopanelApropos({ title, content }) {
  console.log("Toggle clicked")
  const [toggle, setToggle] = useState(false);
  return (
    <div className="infopanel-apropos">
      <h3 className={`info-panel_title ${toggle ? 'arrow_up' : 'arrow_down'}`} onClick={() => setToggle(!toggle)}>
        {title}
        <img className={`arrow_icon ${toggle ? 'arrow_up' : 'arrow_down'}`} src={arrow} alt="Arrow" />
      </h3>
      <div className={`info-panel_content ${toggle ? '' : 'info-panel_content_hidden'}`}>
        {Array.isArray(content) ? content.map((item, index) => (
          <p key={index}>{item}</p>
        )) : content}
      </div>
    </div>
  );
}

function AboutPage() {
  const aboutDatas = [
    {
      id: "1",
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: "2",
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "3",
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: "4",
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>     
       <Banner backgroundImage={about}></Banner>
      <div>
      <main className='about_main'>
          {aboutDatas.map(data => (
            <div key={data.id} className="about_main_info-panel">
              <InfopanelApropos title={data.title} content={data.content} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default AboutPage;
