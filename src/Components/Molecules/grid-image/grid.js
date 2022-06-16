import React, { useEffect } from 'react';
import './grid.scss';

const Grid = (props) => {

    const getData = async () => {
        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);

        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('#top').src = data.about.images.bottom
                document.querySelector('#bottom').src = data.about.images.top
                document.querySelector('#top').alt = data.about.images.altTagFront
                document.querySelector('#bottom').alt = data.about.images.altTagBack
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="about__image-grid" id="app">
            <img src="" alt="" className="about__back-image" id="bottom" />
            <img src="" alt="" className="about__front-image" id="top" />
        </div>
    );
}

export default Grid;