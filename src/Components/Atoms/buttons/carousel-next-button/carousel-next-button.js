import './carousel-next-button.scss';

const CarouselNextButton = () => {
  return (
    <button className="carousel__button">
      <img src={process.env.PUBLIC_URL + '/assets/icons/icon-right-carousel.svg'} alt="arrow right" />
    </button>
  );
}

export default CarouselNextButton;