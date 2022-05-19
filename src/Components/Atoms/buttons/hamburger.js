import './hamburger.scss';
import React, { useEffect, useRef, useState } from 'react';
import Menu from 'src/Components/Molecules/menu/menu';

const Hamburger = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive)
    };

    const wrapperRef = useRef();
    useEffect(() => {
        const closeMenu = e => {
            if (!wrapperRef.current?.contains(e.target)) {
                setActive(false)
            }
        }
        document.body.addEventListener("mousedown", closeMenu);

    }, [wrapperRef]);

    if (isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div ref={wrapperRef} className={`navigation__hamburger${isActive ? " active" : ""}`}  >
            <div onClick={toggleClass}>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
            </div>
            {isActive && (
                <Menu />
            )}

        </div>
    );
}

export default Hamburger;