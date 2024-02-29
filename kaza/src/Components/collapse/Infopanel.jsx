import React, { useState } from 'react';
import arrow from '../../assets/logo/arrow.png';

function Infopanel({ title, content }) {
    const [toggle, setToggle] = useState(false);
  
    return (
        <div className="infopanel">
            <h3 className={`info-panel_title ${toggle ? 'arrow_up' : 'arrow_down'}`} onClick={() => setToggle(!toggle)}>
                {title}
                <img className={`arrow_icon ${toggle ? 'arrow_up' : 'arrow_down'}`} src={arrow} alt="Arrow" />
            </h3>
            <div className={`info-panel_content ${toggle ? '' : 'info-panel_content_hidden'}`}>
                {Array.isArray(content) ? content.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : content}
            </div>
        </div>
    );
}

export default Infopanel;
