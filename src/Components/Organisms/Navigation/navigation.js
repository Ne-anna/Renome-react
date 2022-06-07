import "./navigation.scss";
import jsonFile from "src/db.json";
import React, { useState, useRef, useEffect } from "react";
import Menu from "src/Components/Molecules/menu/menu";
import SubMenu from "src/Components/Molecules/sub-menu.js/sub-menu";
import CartDropDown from "src/Components/Molecules/Cart-drop-down/cart-drop-down";
import Hamburger from "src/Components/Atoms/buttons/hamburger-button/hamburger";

const Navigation = () => {
    const navigation = jsonFile.navigation;

    const [isOpenCart, setOpenCart] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const Ref = useRef();

    const openCart = () => {
        setMenuActive(false)
        setOpenCart(!isOpenCart);
    };

    const openMenu = () => {
        setMenuActive(!isMenuActive);
        setOpenCart(false)
        if (isSubMenuOpen) {
            setMenuActive(false);
            setSubMenuOpen(false);
        }
    };

    const openSubMenu = () => {
        setSubMenuOpen(true);
        setMenuActive(false);
    };

    const closeSubMenu = () => {
        setSubMenuOpen(false);
        setMenuActive(true);
    };

    useEffect(() => {
        const closeWithOutsideClick = (e) => {
            if (!Ref.current?.contains(e.target)) {
                setOpenCart(false);
            }
            if (!Ref.current?.contains(e.target)) {
                setMenuActive(false);
                setSubMenuOpen(false);
            }
        };
        document.body.addEventListener("mousedown", closeWithOutsideClick);
    }, [Ref]);

    if (isMenuActive || isSubMenuOpen || isOpenCart) {
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
                    onClick={openCart}
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
                    className={`navigation__hamburger${isMenuActive
                        ? " active"
                        : isSubMenuOpen
                            ? " active" : ""
                        }`}
                >
                    <Hamburger
                        toggleClass={openMenu}
                    />
                </div>
                {isOpenCart &&
                    <CartDropDown
                    />
                }
                {isMenuActive &&
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
