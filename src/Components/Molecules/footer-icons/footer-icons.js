
import jsonFile from "src/db.json";
import "../footer-icons/footer-icons.scss";
import React from "react";

const FooterIcons = () => {
    const footerIcons = jsonFile.footer.footerIcons;

    return (
        <div className="footer__social-media">
            {footerIcons.map((post) => {
                return (
                    <div className="footer__icon" key={post.id}>
                        <img src={post.icon} alt={post.altTag} />
                    </div>
                );
            })}
        </div>
    );
};

export default FooterIcons;
