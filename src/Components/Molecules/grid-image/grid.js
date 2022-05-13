import './grid.scss';

const Grid = (images) => {
    return (
        <div className="about__image-grid">
            <img src={images.top} alt={images.altTagBack} className="about__back-image" />
            <img src={images.bottom} alt={images.altTagFront} className="about__front-image" />
        </div>
    );
}

export default Grid;