import FooterIcons from 'src/Components/Molecules/footer-icons/footer-icons';
import '../Footer/footer.scss';

const Footer = (footer) => {
    return (
        <div className="footer">
            <h5 className="footer__title">{footer.title}</h5>
            <FooterIcons />
            <h2 className="footer__logo">{footer.logo}</h2>
            <h5 className="footer__copyright">{footer.copyright}</h5>
        </div>

    );
}

export default Footer;