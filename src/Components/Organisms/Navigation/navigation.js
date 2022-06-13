import "./navigation.scss";
import jsonFile from "src/db.json";
import React, { useState, useRef, useEffect } from "react";
import Menu from "src/Components/Molecules/menu/menu";
import SubMenu from "src/Components/Molecules/sub-menu.js/sub-menu";
import CartDropDown from "src/Components/Molecules/Cart-drop-down/cart-drop-down";
import Hamburger from "src/Components/Atoms/buttons/hamburger-button/hamburger";

const Navigation = () => {
    const navigation = jsonFile.navigation;

    const [isCartOpen, setCartOpen] = useState(false);
    const [isMainMenuOpen, setMainMenuOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const Ref = useRef();

    const toggleCart = () => {
        setMainMenuOpen(false)
        setSubMenuOpen(false)
        setCartOpen(!isCartOpen);
    };

    const toggleMenu = () => {
        setMainMenuOpen(!isMainMenuOpen);
        setCartOpen(false)
        if (isSubMenuOpen) {
            setMainMenuOpen(false);
            setSubMenuOpen(false);
        }
    };

    const openSubMenu = () => {
        setSubMenuOpen(true);
        setMainMenuOpen(false);
    };

    const closeSubMenu = () => {
        setSubMenuOpen(false);
        setMainMenuOpen(true);
    };

    useEffect(() => {
        const closeWithOutsideClick = (e) => {
            if (!Ref.current?.contains(e.target)) {
                setCartOpen(false);
            }
            if (!Ref.current?.contains(e.target)) {
                setMainMenuOpen(false);
                setSubMenuOpen(false);
            }
        };
        document.body.addEventListener("mousedown", closeWithOutsideClick);
    }, [Ref]);

    if (isMainMenuOpen || isSubMenuOpen || isCartOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <nav>
            <h2 className="navigation--left">
                {navigation.logo}
            </h2>
            <div className="navigation--right" ref={Ref}>
                <img
                    className="navigation__cart"
                    src={navigation.cartPath}
                    alt={navigation.altTagCart}
                    onClick={toggleCart}
                />
                <p className="navigation__count">
                    {navigation.count}
                </p>
                <img
                    className="navigation__divide"
                    src={navigation.dividerPath}
                    alt={navigation.altTagDivider}
                />
                <div
                    className={`navigation__hamburger${isMainMenuOpen
                        ? " active"
                        : isSubMenuOpen
                            ? " active" : ""
                        }`}
                >
                    <Hamburger
                        toggleClass={toggleMenu}
                    />
                </div>
                {isCartOpen &&
                    <CartDropDown
                    />
                }
                {isMainMenuOpen &&
                    <Menu
                        subMenuOpen={openSubMenu}
                    />
                }
                {isSubMenuOpen &&
                    <SubMenu
                        subMenuClose={closeSubMenu}
                    />
                }
            </div>
        </nav>
    );
};

export default Navigation;
