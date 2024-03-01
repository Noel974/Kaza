import React from 'react';
import Titelogement from './Titelogement';
import Hostlogement from './Hostlogement';
import Tagslogement from './Tagslogement';

export default function Infologement({ title, location, tags, host, rating }) {
    return (
        <div className="Logment_content_infos">
            <Titelogement title={title} location={location} />
            <Hostlogement host={host} rating={rating} />
            <Tagslogement tags={tags} />
        </div>
    );
}
