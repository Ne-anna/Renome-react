import React from 'react';
import './carousel-next-button.scss';

const CarouselNextButton = ({ moveSlide }) => {
  return (
    <button className="carousel__button" onClick={moveSlide}>
      <img src={process.env.PUBLIC_URL + '/assets/icons/icon-right-carousel.svg'}
        alt="arrow right" />
    </button>
  );
}

export default CarouselNextButton;