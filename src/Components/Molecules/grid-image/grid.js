import React, { useState, useEffect } from 'react';
import './grid.scss';

const Grid = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.about.images);
            });
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="about__image-grid">
            <img src={items.top} alt={items.altTagBack} className="about__back-image" />
            <img src={items.bottom} alt={items.altTagFront} className="about__front-image" />
        </div>
    );
}

export default Grid;