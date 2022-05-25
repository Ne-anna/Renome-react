import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel">
      <CarouselComponent />
      <div className="carousel__navigation">
        <CarouselPreviousButton />
        <CarouselNextButton />
      </div>
    </div>
  );
};

export default Carousel;
