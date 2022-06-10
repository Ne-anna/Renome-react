import React from 'react';
import "./menu.scss";
import jsonFile from "src/db.json";
import FeaturesNext from "src/Components/Atoms/buttons/features-next-button/features-next";
import Search from "src/Components/Atoms/buttons/search-button/search-button";

const Menu = ({ subMenuOpen }) => {
    const menu = jsonFile.menu;

    return (
        <div className="navigation__menu">
            {menu.map((post, index) => {
                return (
                    <li
                        className={`navigation__item ${post.isSubMenu
                            ? "navigation__item--features"
                            : post.title === "Search"
                                ? "navigation__item--search"
                                : ""
                            }`}
                        key={index}
                    >
                        {post.title === "Search" ? (
                            <>
                                <input
                                    className="navigation__input--search"
                                    placeholder={post.title}
                                />
                                <Search />
                            </>
                        ) : post.title === "Features" ? (
                            <div className="navigation__item--features" onClick={subMenuOpen}>
                                <a className="navigation__link" href={post.url} >
                                    {post.title}
                                </a>
                            </div>
                        )
                            : (
                                <a className="navigation__link" href={post.url}>
                                    {post.title}
                                </a>
                            )
                        }
                        {post.isSubMenu && (
                            <div onClick={subMenuOpen}>
                                <FeaturesNext />
                            </div>
                        )}
                    </li>
                );
            })}
        </div>
    );
};

export default Menu;
