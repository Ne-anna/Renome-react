import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';
import React from 'react';

const Footer = (props) => {

    return (
        <div className="footer">
            <h5 className="footer__title" id="footerTitle">
                {props.data && props.data.title}
            </h5>
            <FooterIcons data = {props.data && props.data.footerIcons}/>
            <h2 className="footer__logo" id="logo">
                {props.data && props.data.logo}
            </h2>
            <h5 className="footer__copyright" id="copyright">
                {props.data && props.data.copyright}
            </h5>
        </div>
    );
}

export default Footer;