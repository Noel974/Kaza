// Banner.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner({ children, backgroundImage  }) {
  const [isAboutPage, setIsAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAboutPage(location.pathname === '/about');
  }, [location.pathname]);

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className={isAboutPage ? 'banner_about' : 'banner'} style={bannerStyle}>
      {children}
    </section>
  );
}
