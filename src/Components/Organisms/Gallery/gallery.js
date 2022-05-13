import './gallery.scss'

const Gallery = (gallery) => {
    return (
        <div className="gallery">
            <h1 className="gallery__title">{gallery.title}</h1>
            <h5 className="gallery__subtitle">{gallery.subTitle}</h5>
        </div>
    );
}
 
export default Gallery;