import "./carousel-content.scss";

const CarouselComponent = ({
  carousel,
  slideIndex,
  slideDirection,
  prevSlide,
  blockAnimation,
}) => {
  return (
    <div className={"carousel__container"}>
      {carousel.map((post, index) => {
        return (
          <div
            className={`carousel__item ${index < 1 && blockAnimation
              ? "carousel__animation--blocked"
              : slideIndex === index + 1
                ? "active-" + slideDirection
                : prevSlide === index + 1
                  ? "carousel__item--" + slideDirection
                  : "carousel__animation--active"
              } `}
            key={index}
          >
            <div className={`carousel__text ${index < 1 && blockAnimation
              ? "carousel__animation--blocked"
              : slideIndex === index + 1
                ? "active__text-" + slideDirection
                : "carousel__animation--active"
              } `}>
              <h2 className="carousel__title">
                {post.title}
              </h2>
              <h5 className="carousel__subtitle">
                {post.subTitle}
              </h5>
            </div>
            <div className="carousel__image">
              <img src={post.path} alt={post.altTag} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselComponent;
