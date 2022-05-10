import './About.css';

const About = (articles) => {
    return (
        <div className="about">
            <div className="about__text-container">
                <h1 className="about__title">{articles.title}</h1>
                <h5 className="about__subtitle">{articles.subtitle}</h5>
                <p className="about__paragraph">{articles.body}</p>
            </div>
        </div>
    );
}

export default About;
