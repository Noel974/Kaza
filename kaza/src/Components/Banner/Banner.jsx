// Banner.jsx
import React from 'react';

export default function Banner({ backgroundImage, texte }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="banner" style={bannerStyle}>
            <span className="banner-text">{texte}</span>
    </section>
  );
}
