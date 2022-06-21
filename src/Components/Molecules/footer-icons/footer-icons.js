import "../footer-icons/footer-icons.scss";
import React, { useEffect, useState } from "react";

const FooterIcons = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {

        const requestURL = "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
        const request = new Request(requestURL);
        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.footer.footerIcons);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="footer__social-media">
            <div className="footer__icon">
                {items.map((items) => (
                    <img key={items.id} src={items.icon} alt={items.altTag} />
                ))}
            </div>
        </div>
    );

};

export default FooterIcons;