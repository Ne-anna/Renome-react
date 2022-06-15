import React, { useEffect } from 'react';
import './about.scss';
import Grid from 'src/Components/Molecules/grid-image/grid';
import jsonFile from 'src/db.json';

const About = (props) => {
    const images = jsonFile.about.images;

    const getData = async () => {
        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/Fetch-data/src/db.json";
        const request = new Request(requestURL);

        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('#title').innerHTML = data.about.title
                document.querySelector('#subtitle').innerHTML = data.about.subTitle
                document.querySelector('#text').innerHTML = data.about.text
            });
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="about-container">
            <Grid images={images} />
            <div className="about">
                <h1 className="about__title" id="title">
                </h1>
                <h5 className="about__subtitle" id="subtitle">
                </h5>
                <p className="about__paragraph" id="text">
                </p>
            </div>
        </div>
    );
}

export default About;
