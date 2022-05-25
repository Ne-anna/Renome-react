import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";
import jsonFile from "src/db.json";

const Carousel = () => {
  const carousel = jsonFile.carousel;

  const nextSlide = () => {
    console.log("Clicked next")
  }

  const previousSlide = () => {
    console.log("Clicked previous")
  }

  return (
    <div className="carousel">
      <CarouselComponent carousel={carousel} />
      <div className="carousel__navigation">
        <CarouselPreviousButton previousSlide={previousSlide} />
        <CarouselNextButton nextSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
