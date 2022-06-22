import "../footer-icons/footer-icons.scss";
import React from "react";

const FooterIcons = (props) => {

    return (
        <div className="footer__social-media">
            <div className="footer__icon">
                {props.data && props.data.map((items) => (
                    <img key={items.id} src={items.icon} alt={items.altTag} />
                ))}
            </div>
        </div>
    );

};

export default FooterIcons;