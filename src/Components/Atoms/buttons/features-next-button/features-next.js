import './features-next.scss';

const FeaturesNext = () => {
    return (
        <button className="navigation__button--features">
            <img className="features__img" src={process.env.PUBLIC_URL + '/assets/icons/icon-next-features.svg'} alt="next icon" />
        </button>
    );
}

export default FeaturesNext;