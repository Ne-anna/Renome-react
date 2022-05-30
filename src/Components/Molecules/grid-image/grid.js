import React from 'react';
import './grid.scss';

const Grid = (props) => {
    return (
        <div className="about__image-grid">
            <img src={props.images.top} alt={props.images.altTagBack} className="about__back-image" />
            <img src={props.images.bottom} alt={props.images.altTagFront} className="about__front-image" />
        </div>
    );
}

export default Grid;