import './menu.scss';
import jsonFile from 'src/db.json';
import FeaturesNext from 'src/Components/Atoms/buttons/features-next-button/features-next';
import Search from 'src/Components/Atoms/buttons/search-button/search-button';

const Menu = (props) => {
    const menu = jsonFile.menu;

    return (
        <div className={`navigation__menu`}>
            {
                menu.map((post, index) => {
                    return (
                        <li className={`navigation__item ${post.isSubMenu ? 'navigation__item--features' : post.title === "Search" ? 'navigation__item--search' : ''}`} key={index}>
                            {post.title === "Search" ? <><input className='navigation__input--search' placeholder={post.title} /> <Search /> </> : <a className='navigation__link' href={post.url}>{post.title}</a>}
                            {post.isSubMenu &&
                                <div onClick={props.subMenuOpen} >
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