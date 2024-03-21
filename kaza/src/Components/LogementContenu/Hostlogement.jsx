import React from 'react';
import Stars from "./Stars";

export default function Hostlogement({ host, rating }) {
    return (
        <div className="Logment_content_host">
            <div>
                <div className='Logment_content_host_name'>
                    <span>{host.name.split(' ')[0]}</span>
                    <span>{host.name.split(' ')[1]}</span>
                </div>
                <img className='host_img' src={host.picture} alt="host of this Logment" />
            </div>
            <div className="Logment_content_host_stars">
                <Stars rating={rating}/>
            </div>
        </div>
    );
}
