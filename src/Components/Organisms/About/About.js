import React, { useEffect, useState } from 'react';
import './about.scss';
import getData from '../../../fetchlist.js'
import Grid from 'src/Components/Molecules/grid-image/grid';

const About = () => {

     const [items, setItems] = useState([]);

    useEffect(() => {
        getData()
            .then(items => setItems(items.about))
    }, [])

    return (
        <div className="about-container">
            <Grid data = {items.images}/>
            <div className="about">
                <h1 className="about__title" id="title">
                    {items.title}
                </h1>
                <h5 className="about__subtitle" id="subtitle">
                    {items.subTitle}
                </h5>
                <p className="about__paragraph" id="text">
                    {items.text}
                </p>
            </div>
        </div>
    );
}

export default About;
