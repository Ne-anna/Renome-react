import React from 'react';
import './submenu-back.scss'

const SubMenuBack = () => {
    return (
        <button className="sub-navigation__button--back">
            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-back-submenu.svg'}
                alt="back icon" />
        </button>
    );
}

export default SubMenuBack;