import React from 'react';

export default function Titelogement({ title, location}) {
    return (
        <div className="Titelogement">
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
    );
}
