import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {

    const location = useLocation()

    let breadcrumbLinks = location.pathname.split('/'),
        url = ''

    breadcrumbLinks = breadcrumbLinks.map((link, index) => {

        if (link != "") {
            url += '/' + link

            if (index !== breadcrumbLinks.length - 1) {
                return (<li className="breadcrumb-item text-white" key={link}><Link to={url}>{link}</Link></li>)
            } else {
                return (<li className="breadcrumb-item active text-white" aria-current="page" key={link}>{link}</li>)
            }
        }
    })

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
                <li className="breadcrumb-item text-white"><Link to="/">Home</Link></li>
                {breadcrumbLinks}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
