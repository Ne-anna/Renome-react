import './about.scss';

const About = (props) => {
    return (
        
        <div className="about">
            <h1 className="about__title">{props.articles.title}</h1>
            <h5 className="about__subtitle">{props.articles.subTitle}</h5>
            <p className="about__paragraph">{props.articles.text}</p>
        </div>
    );
}

export default About;
