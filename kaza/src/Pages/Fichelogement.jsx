import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../Components/Carrousel/Carrousel';
import Infopanel from '../Components/collapse/Infopanel';
import E404 from '../Pages/404';
import datas from '../assets/data/data.json';
import redStar from '../assets/logo/red_star.png';
import greyStar from '../assets/logo/grey_star.png';

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

    const description = dataCurrentLogment[0].description;
    const equipments = dataCurrentLogment[0].equipments;

    return (
        <>
            <Carrousel imageSlider={imageSlider} />
            <main className="Logment">
                <section className="Logment_content">
                    <div className="Logment_content_infos">
                        <h1>{dataCurrentLogment[0].title}</h1>
                        <p>{dataCurrentLogment[0].location}</p>
                        <div>
                            {dataCurrentLogment[0].tags.map((tag, index) => (
                                <button key={index}>{tag}</button>
                            ))}
                        </div>
                    </div>
                    <div className="Logment_content_host">
                        <div>
                            <div className='Logment_content_host_name'>
                                <span>{dataCurrentLogment[0].host.name.split(' ')[0]}</span>
                                <span>{dataCurrentLogment[0].host.name.split(' ')[1]}</span>
                            </div>
                            <img src={dataCurrentLogment[0].host.picture} alt="host of this Logment" />
                        </div>
                        <div className="Logment_content_host_stars">
                            {[...Array(5)].map((star, index) => (
                                <img key={index} src={index < dataCurrentLogment[0].rating ? redStar : greyStar} alt="star" />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="Logment_infopanel">
                    <div className='detail_info'>
                        {/* Passer la description en tant que prop 'contenu' */}
                        <Infopanel title={'Description'} content={description} />
                    </div>
                    <div className='detail_info'>
                        {/* Passer les équipements en tant que prop 'contenu' */}
                        <Infopanel title={'Équipements'} content={equipments} className="equipments" />
                    </div>
                </section>
            </main>
        </>
    );
}
