import CarouselComponent from "src/Components/Molecules/carousel-content/carousel-content";
import CarouselNextButton from "src/Components/Atoms/buttons/carousel-next-button/carousel-next-button";
import CarouselPreviousButton from "src/Components/Atoms/buttons/carousel-previous-button/carousel-previous-button";
import "./carousel.scss";
import jsonFile from "src/db.json";
import { useState } from "react";

const Carousel = () => {
  const carousel = jsonFile.carousel;

  const [slideIndex, setSlideIndex] = useState(1)
  const [moveToLeft, setMoveToLeft] = useState()
  const [moveToRight, setMoveToRight] = useState()

  const nextSlide = () => {
    moveRight()
    if (slideIndex !== carousel.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === carousel.length) {
      setSlideIndex(1)
    }
    console.log(slideIndex)
  }

  const previousSlide = () => {
    moveLeft()
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(carousel.length)
    }
    console.log(slideIndex)
  }

  const moveRight = () => {
    setMoveToRight(moveToRight)
  }

  const moveLeft = () => {
    setMoveToLeft(moveToLeft)
  }

  return (
    <div className="carousel">
      <CarouselComponent carousel={carousel} slideIndex={slideIndex} moveToLeft={moveToLeft} moveToRight={moveToRight} />
      <div className="carousel__navigation">
        <CarouselPreviousButton previousSlide={previousSlide} />
        <CarouselNextButton nextSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
