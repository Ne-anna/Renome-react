import React from 'react';
import './about.scss';
import Grid from 'src/Components/Molecules/grid-image/grid';
import jsonFile from 'src/db.json';

const About = (props) => {
    const images = jsonFile.about.images;

    return (
        <div className="about-container">
            <Grid images={images} />
            <div className="about">
                <h1 className="about__title">
                    {props.articles.title}
                </h1>
                <h5 className="about__subtitle">
                    {props.articles.subTitle}
                </h5>
                <p className="about__paragraph">
                    {props.articles.text}
                </p>
            </div>
        </div>
    );
}

export default About;
