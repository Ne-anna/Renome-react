import jsonFIle from 'src/db.json';
import './gallery-images.scss'
const GalleryImages = () => {
    const GalleryImages = jsonFIle.gallery.galleryImages;

    return (
        <div className="gallery__image-container">
            {
                GalleryImages.map((post,index ) => {
                    return (
                        <img src={post.path} alt={post.altTag} key={index}/>
                    )
                })
            }
        </div>
    );
}

export default GalleryImages;