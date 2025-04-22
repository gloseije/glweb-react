import React from 'react';
import "../css/servicesLayout.css";
import { Link } from 'react-router-dom';

const ServicesLayout = ({ services, readMoreButton = true }) => {
    return (
        <div className="row px-lg-5">
            {
                services.map((service) => {
                    return (
                        <div className="col-lg-4 col-sm-6" key={service.service}>
                            <div className="card border-0 services-box mx-auto mt-3 mt-lg-0">
                                <div className="card-body h-auto">
                                    <div className='card-img-heght mb-3'>
                                        <img src={service.img} alt={service.img} />
                                    </div>
                                    <h5 className="card-title">{service.service}</h5>
                                    <div className="card-text mb-3">
                                        {service.description}
                                    </div>
                                    {
                                        readMoreButton && (<Link to={`/services`} className='btn btn-sm btn-primary'>En savoir plus</Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ServicesLayout;
