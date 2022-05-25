import CarouselImages from "src/Components/Molecules/carousel-images/carousel-images";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import './carousel.scss';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__item">
        <CarouselImages />
      </div>
      <div className="carousel__navigation">
        <CarouselPreviousButton />
        <CarouselNextButton />
      </div>
    </div>

  );
}

export default Carousel;