import React from 'react';
import './gallery.scss';
import GalleryImages from 'src/Components/Molecules/gallery-images/gallery-images';

const Gallery = (props) => {
    return (
        <div className="gallery">
            <h1 className="gallery__title">{props.gallery.title}</h1>
            <h5 className="gallery__subtitle">{props.gallery.subTitle}</h5>
            <GalleryImages />
        </div>
    );
}

export default Gallery;