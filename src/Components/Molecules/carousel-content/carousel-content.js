import "./carousel-content.scss";

const CarouselComponent = ({ carousel, slideIndex, moveToLeft, moveToRight }) => {

  return (
    <div className={"carousel__container"}>
      {carousel.map((post, index) => {
        return (
          <div className={`carousel__item ${slideIndex === index + 1
            // ? moveToRight : "active" ? moveToLeft : "active-left"
            ? "active"
            : ""
            } `}
            key={index}>
            <div className={` ${slideIndex === index + 1
              ? "text--active "
              : "carousel__text"
              }`}>
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
