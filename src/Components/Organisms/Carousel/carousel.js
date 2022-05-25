import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";
import jsonFile from "src/db.json";
import { useState } from "react";

const Carousel = () => {
  const carousel = jsonFile.carousel;

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== carousel.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === carousel.length) {
      setSlideIndex(1)
    }
    console.log("Clicked next")
  }

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(carousel.length)
    }
    console.log("Clicked previous")
  }

  return (
    <div className="carousel">
      <CarouselComponent carousel={carousel} slideIndex={slideIndex} />
      <div className="carousel__navigation">
        <CarouselPreviousButton previousSlide={previousSlide} />
        <CarouselNextButton nextSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
