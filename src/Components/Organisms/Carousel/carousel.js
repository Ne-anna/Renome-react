import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";
import jsonFile from "src/db.json";
import { useState } from "react";

const Carousel = () => {
  const carousel = jsonFile.carousel;

  const [slideIndex, setSlideIndex] = useState(1)
  const [slideRight, setSlideRight] = useState(true)

  const nextSlide = () => {
    setSlideRight(true)
    if (slideIndex !== carousel.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === carousel.length) {
      setSlideIndex(1)
    }
  }

  const previousSlide = () => {
    setSlideRight(false)
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(carousel.length)
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__slider">
        <CarouselComponent carousel={carousel} slideIndex={slideIndex} slideRight={slideRight} />
      </div>
      <div className="carousel__navigation">
        <CarouselPreviousButton moveSlide={previousSlide} />
        <CarouselNextButton moveSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
