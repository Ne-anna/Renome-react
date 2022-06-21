import React, { useEffect, useState } from 'react';
import './gallery.scss';
import GalleryImages from 'src/Components/Molecules/gallery-images/gallery-images';

const Gallery = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.gallery);
            });
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="gallery">
            <h1 className="gallery__title" id="galleryTitle">
                {items.title}
            </h1>
            <h5 className="gallery__subtitle" id="gallerySubTitle">
                {items.subTitle}
            </h5>
            <GalleryImages />
        </div>
    );
}

export default Gallery;