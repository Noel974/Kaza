import React from 'react';

export default function Tagslogement({ tags }) {
    return (
        <div className='Tagbutton'>
            {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
            ))}
        </div>
    );
}
