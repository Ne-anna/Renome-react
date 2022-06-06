import "./hamburger.scss";
import Menu from "src/Components/Molecules/menu/menu";
import SubMenu from "src/Components/Molecules/sub-menu.js/sub-menu";

const Hamburger = ({
    toggleClass,
    closeSubMenu,
    openSubMenu,
    isClicked,
    isActive,
    wrapperRef
}) => {

    return (
        <div
            ref={wrapperRef}
            className={`navigation__hamburger${isActive
                ? " active"
                : isClicked
                    ? " active" : ""
                }`}
        >
            <div onClick={toggleClass}>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
                <span className="navigation__hamburger-bar"></span>
            </div>
            {isActive &&
                <Menu
                    subMenuOpen={openSubMenu}
                />
            }
            {isClicked &&
                <SubMenu
                    subMenuClose={closeSubMenu}
                />
            }
        </div>
    );
};

export default Hamburger;
