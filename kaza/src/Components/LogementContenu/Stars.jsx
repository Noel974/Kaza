import React from 'react';
import redStar from '../../assets/logo/red_star.png';
import greyStar from '../../assets/logo/grey_star.png';

export default function HostStars({ rating }) {
    return (
        <div className="Stars">
            {[...Array(5)].map((_, index) => (
                <img className="starratind" key={index} src={index < rating ? redStar : greyStar} alt="star" />
            ))}
        </div>
    );
}