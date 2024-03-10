import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ id, cover, title }) => {
    return (
        <Link to={`/Fichelogement/${id}`} className="home_gallery" key={id}>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
}

export default CardItem;
