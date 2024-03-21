import React from 'react';

export default function Tagslogement({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => (
                <button className='Logment_content_tag' key={index}>{tag}</button>
            ))}
        </div>
    );
}
