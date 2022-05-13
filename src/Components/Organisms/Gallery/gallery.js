import './gallery.scss'

const Gallery = (props) => {
    return (
        <div className="gallery">
            <h1 className="gallery__title">{props.gallery.title}</h1>
            <h5 className="gallery__subtitle">{props.gallery.subTitle}</h5>
        </div>
    );
}
 
export default Gallery;