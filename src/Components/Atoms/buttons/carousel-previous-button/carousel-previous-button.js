import React from 'react';
import '../carousel-next-button/carousel-next-button.scss';

const CarouselPreviousButton = ({ moveSlide }) => {
  return (
    <button className="carousel__button" onClick={moveSlide}>
      <img src={process.env.PUBLIC_URL + '/assets/icons/icon-left-carousel.svg'} alt="arrow left" />
    </button>);
}

export default CarouselPreviousButton;