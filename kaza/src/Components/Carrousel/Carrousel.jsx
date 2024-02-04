import { useState } from 'react';
import right from '../../assets/logo/arrow_right.svg';
import left from '../../assets/logo/arrow_left.svg';

export default function Carrousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSlider.length) % imageSlider.length);
  };

  return (
    <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carousel'>
      {imageSlider.length > 1 && (
        <>
          <img
            className='carousel_arrow carousel_arrow_right'
            src={right}
            alt='show next slider'
            onClick={nextSlide}
          />
          <img
            className='carousel_arrow carousel_arrow_left'
            src={left}
            alt='show previous slider'
            onClick={prevSlide}
          />
          {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}
        </>
      )}
    </section>
  );
}
