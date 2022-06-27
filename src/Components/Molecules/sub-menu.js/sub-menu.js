import React from 'react';
import SubMenuBack from "src/Components/Atoms/buttons/submenu-back-button/submenu-back";
import "./sub-menu.scss";

const SubMenu = (props) => {

    return (
        <div className="sub-navigation">
            <div className="sub-navigation__item--back" onClick={props.subMenuClose}>
                <div>
                    <SubMenuBack />
                </div>
                <p className="sub-navigation__text--back" onClick={props.subMenuClose}>
                    {props.backButtonData.title}
                </p>
            </div>
            {props.menuData && props.menuData.map((post, menuIndex) => {
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
