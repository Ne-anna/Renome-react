import React from 'react';
import './grid.scss';

const Grid = (props) => {

    return (
        <div className="about__image-grid">
            <img src={props.data && props.data.top} alt={props.data && props.data.altTagBack} className="about__back-image" />
            <img src={props.data && props.data.bottom} alt={props.data && props.data.altTagFront} className="about__front-image" />
        </div>
    );
}

export default Grid;