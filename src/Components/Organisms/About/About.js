import './about.scss';

const About = (articles) => {
    return (
        
        <div className="about">
            <h1 className="about__title">{articles.title}</h1>
            <h5 className="about__subtitle">{articles.subTitle}</h5>
            <p className="about__paragraph">{articles.text}</p>
        </div>
    );
}

export default About;
