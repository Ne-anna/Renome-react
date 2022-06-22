import React from 'react';
import './gallery-images.scss'

const GalleryImages = (props) => {

    return (
        <div className="gallery__image-container">
            {
                   props.data && props.data.map((items, index) => {
                    return (
                        <img src={items.path} alt={items.altTag} key={index} />
                    )
                    })
                }
        </div>
    );
}

export default GalleryImages;