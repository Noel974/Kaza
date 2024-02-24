import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//importation des composants page 404
import Carrousel from '../Components/Carrousel/Carrousel';
import E404 from '../Pages/404';
// importation des datas
import datas from '../assets/data/data.json';
// import logo 
import arrow from '../assets/logo/arrow.png';
import redStar from '../assets/logo/red_star.png';
import greyStar from '../assets/logo/grey_star.png';

function InfopanelLogement({ title, content }) {
	const [toggle, setToggle] = useState(false);
  
	return (
	  <div className="infopanel-logement">
		<h3 className={`info-panel_title ${toggle ? 'arrow_up' : 'arrow_down'}`} onClick={() => setToggle(!toggle)}>
		  {title}
		  <img className={`arrow_icon ${toggle ? 'arrow_up' : 'arrow_down'}`} src={arrow} alt="Arrow" />
		</h3>
		<div className={`info-panel_logement_content ${toggle ? '' : 'info-panel_content_hidden'}`}>
		  {Array.isArray(content) ? content.map((item, index) => (
			<p key={index}>{item}</p>
		  )) : content}
		</div>
	  </div>
	);
  }

export default function Fichelogement() {
  const [imageSlider, setImageSlider] = useState([]);
  const { id } = useParams();
  const dataCurrentLogment = datas.filter(data => data.id === id);

  useEffect(() => {
    console.log('Current ID:', id);
    console.log('Filtered Logment:', dataCurrentLogment);

    if (dataCurrentLogment.length > 0) {
      setImageSlider(dataCurrentLogment[0].pictures);
    } else {
      console.log('Logment not found for ID:', id);
    }
  }, [id, dataCurrentLogment]);

  if (dataCurrentLogment.length === 0) {
    console.log('Rendering 404 page');
    return <E404 />;
  }

	const name = dataCurrentLogment[0].host.name.split(' ');
	const rating = dataCurrentLogment[0].rating;
	const description = dataCurrentLogment[0].description;
	const equipments = dataCurrentLogment[0].equipments;
  return (
    <>
    <Carrousel imageSlider={imageSlider} />
    <main className="Logment">
				<div className="Logment_content">
					<div className="Logment_content_infos">
						<h1>{dataCurrentLogment[0].title}</h1>
						<p>{dataCurrentLogment[0].location}</p>
						<div>
							{dataCurrentLogment[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="Logment_content_host">
						<div>
							<div className='Logment_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentLogment[0].host.picture} alt="host of this Logment" />
						</div>

						<div className="Logment_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="Logment_infopanel">
					
						<InfopanelLogement title={'Description'} content={description} />

						<InfopanelLogement title={'Équipements'} content={equipments} />

				</div>
			</main>
    </>
  );
}
