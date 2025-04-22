import React from 'react';
import '../css/services.css';
import Breadcrumb from '../components/Breadcrumb';
import ServicesLayout from '../components/ServicesLayout';
import { servicesWithLists } from './dataServices';

const Services = () => {
    return (
        <div id='services'>
            <div id="service-banner">
                <div id="background">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <div className="mt-3">
                            <h2 className='text-light'>Découvrez nos différents services!</h2>
                            <Breadcrumb />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5' style={{background:'#fbfbfb'}}>
                <div className="container">
                    <div className='text-center mb-4'>
                        <span className='text-primary'>Nos services</span>
                        <h3>Découvrez nos solutions web !</h3>
                    </div>
                    <ServicesLayout services={servicesWithLists} readMoreButton={false} />
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='py-5'>
                        <h2 className="text-center">Votre partenaire de confiance pour des projets web réussis</h2>
                        <p>
                            En nous choisissant, nous nous engageons à créer des expériences web qui manquent les esprits et engagent vos utilisateurs. Faîtes confiance à notre équipe pour réaliser des sites web uniques. 
                        </p>
                        <div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <img src="/img/site-vitrine-et-blog.png" className='w-100 p-lg-5' alt="website" />
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-center">
                                    <h3>Visibilité en ligne et accessibilité continue</h3>
                                    <p>
                                        Avoir un site web vous confère ou à votre entreprise une image sérieuse et professionnelle.
                                        Votre site web est votre carte de visite en ligne, accessible 24h/24, 7j/7.
                                        Dans un monde où 75% des clients vérifient d'abord une entreprise en ligne, une présence web soignée rassure vos visiteurs et augmente leur confiance en vos services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <div className="col-md-6">
                                    <img src="/img/e-commerce.png" className='w-100 p-lg-5' alt="website" />
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-center">
                                    <h3>Se démarquer de la concurrence</h3>
                                    <p>
                                        Votre site web et son contenu peuvent être personnalisés pour refléter ce qui rend votre entreprise unique.
                                        En partageant vos valeurs, votre vision, et des éléments spécifiques de votre expertise, vous attirez les clients qui recherchent précisement ce que vous proposez.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
