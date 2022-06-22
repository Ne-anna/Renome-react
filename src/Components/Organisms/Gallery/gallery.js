import React, { useEffect, useState } from 'react';
import './gallery.scss';
import getData from '../../../fetchlist.js';
import GalleryImages from 'src/Components/Molecules/gallery-images/gallery-images';

const Gallery = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getData()
            .then(items => setItems(items.gallery))
    }, [])

    return (
        <div className="gallery">
            <h1 className="gallery__title" id="galleryTitle">
                {items.title}
            </h1>
            <h5 className="gallery__subtitle" id="gallerySubTitle">
                {items.subTitle}
            </h5>
            <GalleryImages data = {items.galleryImages}/>
        </div>
    );
}

export default Gallery;