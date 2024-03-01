import React from 'react';
import redStar from '../../assets/logo/red_star.png';
import greyStar from '../../assets/logo/grey_star.png';

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
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={index < rating ? redStar : greyStar} alt="star" />
                ))}
            </div>
        </div>
    );
}
