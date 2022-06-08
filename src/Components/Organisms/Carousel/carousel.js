import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";
import jsonFile from "src/db.json";
import { useState } from "react";

const Carousel = () => {
  const carousel = jsonFile.carousel;

  const [slideIndex, setSlideIndex] = useState(1)
  const [slideDirection, setSlideDirection] = useState("right")
  const [prevSlide, setPrevSlide] = useState(carousel.length)
  const [blockedAnimation, setBlockedAnimation] = useState(true)

  const nextSlide = () => {
    setSlideDirection("right")
    setBlockedAnimation(false)
    if (slideIndex !== carousel.length) {
      setSlideIndex(slideIndex + 1)
      setPrevSlide(slideIndex)
    } else if (slideIndex === carousel.length) {
      setSlideIndex(1)
      setPrevSlide(carousel.length)
    }
  }

  const previousSlide = () => {
    setSlideDirection("left")
    setBlockedAnimation(false)
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
      setPrevSlide(slideIndex)
    } else if (slideIndex === 1) {
      setSlideIndex(carousel.length)
      setPrevSlide(1)
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__slider">
        <CarouselComponent
          carousel={carousel}
          prevSlide={prevSlide}
          slideIndex={slideIndex}
          slideDirection={slideDirection}
          blockAnimation={blockedAnimation} />
      </div>
      <div className="carousel__navigation">
        <CarouselPreviousButton
          moveSlide={previousSlide} />
        <CarouselNextButton
          moveSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
