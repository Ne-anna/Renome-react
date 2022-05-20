import jsonFile from 'src/db.json';
import './sub-menu.scss';

const SubMenu = () => {
    const menu = jsonFile.menu;

    return (
        <div className="sub-navigation">
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