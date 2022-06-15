
import jsonFile from "src/db.json";
import "../footer-icons/footer-icons.scss";
import React, { useEffect } from "react";

const FooterIcons = () => {
    const footerIcons = jsonFile.footer.footerIcons;

    // const getIcon = () => {
    //     fetch('https://github.com/Ne-anna/Renome-react/blob/main/src/db.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //             },
    //             mode: 'no-cors'
    //         }
    //     )
    //         .then(response => {
    //             // console.log(response)
    //             response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         });
    // }
    // useEffect(() => {
    //     getIcon()
    // })

    const getIcon = async () => {
        const requestURL = "../../../db.json";
        const request = new Request(requestURL);

        await fetch(request)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
    }
    useEffect(() => {
        getIcon()
    }, [])

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
