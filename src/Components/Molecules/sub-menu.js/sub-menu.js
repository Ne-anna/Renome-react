import React from 'react';
import jsonFile from "src/db.json";
import SubMenuBack from "src/Components/Atoms/buttons/submenu-back-button/submenu-back";
import "./sub-menu.scss";

const SubMenu = ({ subMenuClose }) => {
    const menu = jsonFile.menu;
    const backButton = jsonFile.backButtonTitle;

    return (
        <div className="sub-navigation">
            <div className="sub-navigation__item--back">
                <div onClick={subMenuClose}>
                    <SubMenuBack />
                </div>
                <p className="sub-navigation__text--back" onClick={subMenuClose}>
                    {backButton.title}
                </p>
            </div>
            {menu.map((post, indexA) => {
                return typeof post.subMenu == "object" ? (
                    <div key={indexA}>

                        {post.subMenu.map((post, indexB) => (
                            <div className="sub-navigation__item" key={indexB}>
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
