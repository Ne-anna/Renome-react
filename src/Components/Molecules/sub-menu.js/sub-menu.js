import jsonFile from 'src/db.json';
import SubMenuBack from 'src/Components/Atoms/buttons/submenu-back-button/submenu-back';
import './sub-menu.scss';

const SubMenu = (props) => {
    const menu = jsonFile.menu;

    return (
        <div className="sub-navigation">
            <div className="sub-navigation__item--back">
                <div onClick={props.subMenuClose}> <SubMenuBack /></div>

                <p className="sub-navigation__text--back" onClick={props.subMenuClose}>Back</p>
            </div>
            {
                menu.map((post => {
                    return (
                        (typeof (post.subMenu) == 'object') ?
                            <>
                                {
                                    post.subMenu.map((post) =>
                                        <div className='sub-navigation__item'>
                                            <p className="sub-navigation__text"> {post.title} </p>
                                        </div>)
                                }
                            </>
                            : null
                    )
                }))
            }
        </div>
    );
}

export default SubMenu;