import React from 'react';
import './gallery.scss';
import GalleryImages from 'src/Components/Molecules/gallery-images/gallery-images';

const Gallery = (props) => {

    return (
        <div className="gallery">
            <h1 className="gallery__title" id="galleryTitle">
                {props.data && props.data.title}
            </h1>
            <h5 className="gallery__subtitle" id="gallerySubTitle">
                {props.data && props.data.subTitle}
            </h5>
            <GalleryImages data = {props.data && props.data.galleryImages}/>
        </div>
    );
}

export default Gallery;