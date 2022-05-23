import './hamburger.scss';
import React, { useEffect, useRef, useState } from 'react';
import Menu from 'src/Components/Molecules/menu/menu';
import SubMenu from 'src/Components/Molecules/sub-menu.js/sub-menu';

const Hamburger = () => {
    const [isActive, setActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleClass = () => {
        setActive(!isActive)
        if(isClicked) {
            setActive(false)
            setIsClicked(false)
        }
    };

    const openSubMenu = () => {
        setIsClicked(true)
        setActive(false)
    }

    const closeSubMenu = () => {
        setIsClicked(false)
        setActive(true)
    }

    const wrapperRef = useRef();
    useEffect(() => {
        const closeMenu = e => {
            if (!wrapperRef.current?.contains(e.target)) {
                setActive(false)
                setIsClicked(false)
            }
        }
        document.body.addEventListener("mousedown", closeMenu);

    }, [wrapperRef]);

    if (isActive || isClicked) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div ref={wrapperRef} className={`navigation__hamburger${isActive ? " active" : isClicked ? " active" : ""}`}  >
            <div onClick={toggleClass}>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
            </div>
            {isActive && (
                <Menu subMenuOpen={openSubMenu} />
            )}
            {isClicked && (
                <SubMenu subMenuClose={closeSubMenu} />
            )}
        </div>
    );
}

export default Hamburger;