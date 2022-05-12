import './grid.scss';

const Grid = (images) => {
    return (
        <div className="about__image-grid">
            <div className="about__back-container">
                <img src={images.top} alt={images.altTagTop}/>
            </div>
            <div className="about__front-container">
                <img src={images.bottom} alt={images.altTagBottom}/>
            </div>
        </div>
    );
}

export default Grid;