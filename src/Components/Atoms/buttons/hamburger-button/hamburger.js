import "./hamburger.scss";

const Hamburger = ({ toggleClass }) => {

    return (
        <div onClick={toggleClass}>
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
        </div>
    );
};

export default Hamburger;
