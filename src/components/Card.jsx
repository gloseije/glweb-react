import React from 'react';
import '../css/card.css'
import { Link } from 'react-router-dom';

const Card = ({ media, category, title, updateDate, link, categoryHref }) => {

    const dateFormat = (date) => {
        const dateObjet = new Date(date)
        const dateOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }

        const formattedDate = dateObjet.toLocaleDateString('fr-FR', dateOptions)

        return `le ${formattedDate}`
    }

    return (
        <div className="card border-0 shadow-sm">
            <img src={`https://app.glweb.test/storage/${media}`} className="card-img-top rounded img-article" alt="title" />
            <div className="card-body card-body-height">
                <div className='mb-2'><Link to={`/blog/${categoryHref}`} className="label-post rounded">{category}</Link></div>
                <h5 style={{
                    fontSize : '18px',
                }} className="card-title">
                    <Link to={`/${link}`} className='link-post'>{ title }</Link>
                </h5>

            </div>
            <div className="card-body d-flex align-items-start">
                <small>{ dateFormat(updateDate) }</small>
            </div>
        </div>
    );
}

export default Card;
