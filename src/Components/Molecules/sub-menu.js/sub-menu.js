import React from 'react';
import jsonFile from "src/db.json";
import SubMenuBack from "src/Components/Atoms/buttons/submenu-back-button/submenu-back";
import "./sub-menu.scss";

const SubMenu = ({ subMenuClose }) => {
    const menu = jsonFile.menu;
    const backButton = jsonFile.backButtonTitle;

    return (
        <div className="sub-navigation" onClick={subMenuClose}>
            <div className="sub-navigation__item--back">
                <div>
                    <SubMenuBack />
                </div>
                <p className="sub-navigation__text--back" onClick={subMenuClose}>
                    {backButton.title}
                </p>
            </div>
            {menu.map((post, menuIndex) => {
                return typeof post.subMenu == "object" ? (
                    <div key={menuIndex}>

                        {post.subMenu.map((post, subMenuIndex) => (
                            <div className="sub-navigation__item" key={subMenuIndex}>
                                <p className="sub-navigation__text">
                                    {post.title}
                                </p>
                            </div>
                        ))}

                    </div>
                ) : null;
            })}
        </div>
    );
};

export default SubMenu;
