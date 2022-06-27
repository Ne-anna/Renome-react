import React from 'react';
import './about.scss';
import Grid from 'src/Components/Molecules/grid-image/grid';

const About = (props) => {

    return (
        <div className="about-container">
            <Grid data = {props.data && props.data.images}/>
            <div className="about">
                <h1 className="about__title" id="title">
                    {props.data && props.data.title}
                </h1>
                <h5 className="about__subtitle" id="subtitle">
                    {props.data && props.data.subTitle}
                </h5>
                <p className="about__paragraph" id="text">
                    {props.data && props.data.text}
                </p>
            </div>
        </div>
    );
}

export default About;
