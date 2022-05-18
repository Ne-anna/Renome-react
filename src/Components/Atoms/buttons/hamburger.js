import './hamburger.scss';
import React, { useState } from 'react';
import Menu from 'src/Components/Molecules/menu/menu';

const Hamburger = () => {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        (setActive(!isActive))
    };

    if (isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div className={`navigation__hamburger${isActive ? " active" : ""}`} onClick={toggleClass} >
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
            <span className="navigation__hamburger-bar"></span>
            {isActive && (
                <Menu />
            )}
        </div>
    );
}

export default Hamburger;