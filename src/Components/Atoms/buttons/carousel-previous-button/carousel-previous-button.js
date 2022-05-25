import '../carousel-next-button/carousel-next-button.scss';

const CarouselPreviousButton = ({ previousSlide }) => {
  return (
    <button className="carousel__button" onClick={previousSlide}>
      <img src={process.env.PUBLIC_URL + '/assets/icons/icon-left-carousel.svg'} alt="arrow left" />
    </button>);
}

export default CarouselPreviousButton;