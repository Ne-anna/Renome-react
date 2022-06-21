import React, { useState, useEffect } from 'react';
import './gallery-images.scss'

const GalleryImages = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.gallery.galleryImages);
            });
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="gallery__image-container">
            {
                items.map((items, index) => {
                    return (
                        <img src={items.path} alt={items.altTag} key={index} />
                    )
                })
            }
        </div>
    );
}

export default GalleryImages;