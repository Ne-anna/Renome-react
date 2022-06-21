import React, { useEffect, useState } from 'react';
import './about.scss';
import Grid from 'src/Components/Molecules/grid-image/grid';

const About = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.about);
            });
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="about-container">
            <Grid />
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
