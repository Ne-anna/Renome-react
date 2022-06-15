import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';
import React, { useEffect } from 'react';

const Footer = (props) => {

    const getData = async () => {
        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/Fetch-data/src/db.json";
        const request = new Request(requestURL);

        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('#footerTitle').innerHTML = data.footer.title
                document.querySelector('#logo').innerHTML = data.footer.logo
                document.querySelector('#copyright').innerHTML = data.footer.copyright
            });
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="footer">
            <h5 className="footer__title" id="footerTitle">
            </h5>
            <FooterIcons />
            <h2 className="footer__logo" id="logo">
            </h2>
            <h5 className="footer__copyright" id="copyright">
            </h5>
        </div>

    );
}

export default Footer;