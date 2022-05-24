import './navigation-bar.scss';
import jsonFile from 'src/db.json';
import React, { useState, useRef, useEffect } from 'react';
import CartDropDown from '../Cart-drop-down/cart-drop-down';
import Hamburger from 'src/Components/Atoms/buttons/hamburger-button/hamburger';

const NavigationBar = () => {
    const navigation = jsonFile.navigation;

    const [isopenCart, setOpenCart] = useState(false);

    const openCart = () => {
        setOpenCart(!isopenCart)
    }

    const cartRef = useRef();
    useEffect(() => {
        const closeMenu = e => {
            if (!cartRef.current?.contains(e.target)) {
                setOpenCart(false)
            }
        }
        document.body.addEventListener("mousedown", closeMenu);

    }, [cartRef]);

    return (
        <nav>
            <h2 className="navigation--left">{navigation.logo}</h2>
            <div  className="navigation--right">
                <img ref={cartRef} className="navigation__cart" src={navigation.cartPath} alt={navigation.altTagCart} onClick={openCart} />
                <p className="navigation__count">{navigation.count}</p>
                <img className="navigation__divide" src={navigation.dividerPath} alt={navigation.altTagDivider} />
                <Hamburger />
                {isopenCart && (
                    <CartDropDown />
                )
                }
            </div>
        </nav>
    );
}

export default NavigationBar;