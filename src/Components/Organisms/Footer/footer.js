import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';
import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.footer);
            });
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="footer">
            <h5 className="footer__title" id="footerTitle">
                {items.title}
            </h5>
            <FooterIcons />
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