import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';
import getData from '../../../fetchlist.js'
import React, { useEffect, useState } from 'react';

const Footer = () => {

      const [items, setItems] = useState([]);

    useEffect(() => {
        getData()
            .then(items => setItems(items.footer))
    }, [])

    return (
        <div className="footer">
            <h5 className="footer__title" id="footerTitle">
                {items.title}
            </h5>
            <FooterIcons data = {items.footerIcons}/>
            <h2 className="footer__logo" id="logo">
                {items.logo}
            </h2>
            <h5 className="footer__copyright" id="copyright">
                {items.copyright}
            </h5>
        </div>
    );
}

export default Footer;