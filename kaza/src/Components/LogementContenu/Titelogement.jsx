import React from 'react';
import Tagslogement from './Tagslogement'; // Importer le composant Tagslogement

export default function Titelogement({ title, location,tags}) {
    return (
        <div className="Logment_content_infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <Tagslogement tags={tags} />
        </div>
    );
}
