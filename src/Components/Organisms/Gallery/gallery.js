import React, { useEffect } from 'react';
import './gallery.scss';
import GalleryImages from 'src/Components/Molecules/gallery-images/gallery-images';

const Gallery = (props) => {

    const getData = async () => {
        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/Fetch-data/src/db.json";
        const request = new Request(requestURL);

        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('#galleryTitle').innerHTML = data.gallery.title
                document.querySelector('#gallerySubTitle').innerHTML = data.gallery.subTitle
            });
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="gallery">
            <h1 className="gallery__title" id="galleryTitle">
            </h1>
            <h5 className="gallery__subtitle" id="gallerySubTitle">
            </h5>
            <GalleryImages />
        </div>
    );
}

export default Gallery;