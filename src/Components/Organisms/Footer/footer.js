import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';
import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <h5 className="footer__title">{props.footer.title}</h5>
            <FooterIcons />
            <h2 className="footer__logo">{props.footer.logo}</h2>
            <h5 className="footer__copyright">{props.footer.copyright}</h5>
        </div>

    );
}

export default Footer;