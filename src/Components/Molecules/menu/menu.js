import './menu.scss';
import jsonFile from 'src/db.json';
import FeaturesNext from 'src/Components/Atoms/buttons/features-next';
// import SubMenu from '../sub-menu.js/sub-menu';
// import { useState } from 'react';
// import Search from 'src/Components/Atoms/buttons/search-button';

const Menu = () => {
    const menu = jsonFile.menu;
    // const [isActive,setIsActive] = useState(false);
    // const handleToggle =() => {
    //     setIsActive(!isActive);
    // }
   
    return (
        <div className="navigation__menu">
            {
                menu.map((post, index) => {
                    return (
                        <li className={`navigation__item ${post.isSubMenu ? 'navigation__item--features' : 'navigation__item__submenu'}`} key={index}>
                            <a className="navigation__link" href={post.url}>{post.title}</a>
                            {post.isSubMenu &&
                                <div>
                                    <FeaturesNext />
                                </div>
                            }
                        </li>

                    )
                })
            }
        </div>
    );
}

export default Menu;