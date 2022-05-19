import './navigation-bar.scss';
import jsonFile from 'src/db.json';
import Hamburger from 'src/Components/Atoms/buttons/hamburger-button/hamburger';

const NavigationBar = () => {
    const navigation = jsonFile.navigation;

    return (
        <nav>
            <h2 className="navigation--left">{navigation.logo}</h2>
            <div className="navigation--right">
                <img className="navigation__cart" src={navigation.cart} alt={navigation.altTagCart} />
                <p className="navigation__count">{navigation.count}</p>
                <img className="navigation__divide" src={navigation.divider} alt={navigation.altTagDivider} />
                <Hamburger />
            </div>
        </nav>
    );
}

export default NavigationBar;