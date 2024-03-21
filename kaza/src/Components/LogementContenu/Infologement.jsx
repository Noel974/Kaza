import React from 'react';
import Titelogement from './Titelogement';
import Hostlogement from './Hostlogement';


export default function Infologement({ title, location, tags, host, rating }) {
    return (
        <div className='Logment_content'>
            <Titelogement title={title} location={location} tags={tags} />
            <Hostlogement host={host} rating={rating} />
        </div>
    );
}
