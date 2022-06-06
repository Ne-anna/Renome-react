import "./navigation.scss";
import jsonFile from "src/db.json";
import React, { useState, useRef, useEffect } from "react";
import CartDropDown from "src/Components/Molecules/Cart-drop-down/cart-drop-down";
import Hamburger from "src/Components/Atoms/buttons/hamburger-button/hamburger";

const Navigation = () => {
    const navigation = jsonFile.navigation;

    const [isOpenCart, setOpenCart] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const cartRef = useRef();
    const wrapperRef = useRef();

    const openCart = () => {
        setOpenCart(!isOpenCart);
    };

    const toggleClass = () => {
        setActive(!isActive);
        if (isClicked) {
            setActive(false);
            setIsClicked(false);
        }
    };

    const openSubMenu = () => {
        setIsClicked(true);
        setActive(false);
    };

    const closeSubMenu = () => {
        setIsClicked(false);
        setActive(true);
    };

    useEffect(() => {
        const closeCart = (e) => {
            if (!cartRef.current?.contains(e.target)) {
                setOpenCart(false);
            }
        };
        document.body.addEventListener("mousedown", closeCart);
    }, [cartRef]);


    useEffect(() => {
        const closeMenu = (e) => {
            if (!wrapperRef.current?.contains(e.target)) {
                setActive(false);
                setIsClicked(false);
            }
        };
        document.body.addEventListener("mousedown", closeMenu);
    }, [wrapperRef]);


    if (isActive || isClicked || isOpenCart) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <nav>
            <h2 className="navigation--left">
                {navigation.logo}
            </h2>
            <div className="navigation--right">
                <img
                    ref={cartRef}
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
                <Hamburger
                    toggleClass={toggleClass}
                    closeSubMenu={closeSubMenu}
                    openSubMenu={openSubMenu}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    setActive={setActive}
                    isActive={isActive}
                    wrapperRef={wrapperRef}
                />
                {isOpenCart &&
                    <CartDropDown />
                }
            </div>
        </nav>
    );
};

export default Navigation;
