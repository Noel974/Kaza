import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../Components/Carrousel/Carrousel';
import Infologement from '../Components/LogementContenu/Infologement';

import Infopanel from '../Components/Collapse/Infopanel';
import E404 from '../Pages/404';
import datas from '../assets/data/data.json';


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
    
    return (
        <>
            <Carrousel imageSlider={imageSlider} />
            <main className="Logment">
                <div className="infologment">
                    <Infologement
                        title={dataCurrentLogment[0].title}
                        location={dataCurrentLogment[0].location}
                        tags={dataCurrentLogment[0].tags}
                        host={dataCurrentLogment[0].host}
                        rating={dataCurrentLogment[0].rating}
                    />
                </div>
                <div className="Logment_infopanel">
                    <div className='detail_info'>
                        {/* Passer la description en tant que prop 'contenu' */}
                        <Infopanel title={'Description'} content={dataCurrentLogment[0].description} />
                    </div>
                    <div className='detail_info'>
                        {/* Passer les équipements en tant que prop 'contenu' */}
                        <Infopanel title={'Équipements'} content={dataCurrentLogment[0].equipments} className="equipments" />
                    </div>
                </div>

            </main>
        </>
    );
}
