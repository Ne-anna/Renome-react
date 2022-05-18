import './hamburger.scss';
import React, { useState } from 'react';
// import Menu from 'src/Components/Molecules/menu/menu';

const Hamburger = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className={`navigation__hamburger${isActive ? " active" : ""}`} onClick={toggleClass}>
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
        </div>
    );
}

export default Hamburger;