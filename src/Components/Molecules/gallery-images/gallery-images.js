import jsonFIle from 'src/db.json';
import './gallery-images.scss'
const GalleryImages = () => {
    const GalleryImages = jsonFIle.gallery.galleryImages;

    return (
        <div className="gallery__image-container">
            {
                GalleryImages.map(post => {
                    return (
                        <img className='gallery__image' src={post.path} alt={post.altTag}/>
                    )
                })
            }
        </div>
    );
}

export default GalleryImages;