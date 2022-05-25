import jsonFile from "src/db.json";
import "./carousel-images.scss";
const CarouselImages = () => {
  const carousel = jsonFile.carousel;

  return (
    <div className="carousel__image">
      {carousel.map((post) => {
        return <img className="img" src={post.path} alt={post.altTag} />;
      })}
    </div>
  );
};

export default CarouselImages;
