import React from 'react';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Breadcrumb from '../components/Breadcrumb';

const Contact = () => {

    const styleIcon = { fontSize: '32px', color: '#46a2ff' }

    return (
        <div id='contact'>
            <div id="banner">
                <div className="background">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <div className="mt-3">
                            <h2 className='text-light'>Conctactez-nous</h2>
                            <Breadcrumb />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 px-4 pb-4">
                        <form action="">
                            <div className="row mb-3">
                                <div className="col-sm-6">
                                    <label htmlFor="nom" className='form-label'>Nom : </label>
                                    <input type="text" name="nom" id="nom" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="email" className='form-label'>Email : </label>
                                    <input type="email" name="email" id="email" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sujet" className='form-label'>Sujet : </label>
                                <input type="text" name="sujet" id="sujet" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className='form-label'>Message : </label>
                                <textarea name="message" id="message" className='form-control' rows={3}></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Envoyer le message" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4" id='get-in-touch'>
                        <span style={{color: '#46a2ff'}}>Contact</span>
                        <h3 className='my-2'>Entrez en contact avec nous</h3>
                        <div>
                            <div className='d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center'>
                                <div className='d-flex align-items-center gap-2'>
                                    <div><FontAwesomeIcon icon={faWhatsapp} style={styleIcon} /></div>
                                    <div>
                                        <div><strong>Ecrivez-nous sur whatsapp</strong></div>
                                        <div>+243 990 594 755</div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <div><FontAwesomeIcon icon={faEnvelope} style={styleIcon} /></div>
                                    <div>
                                        <div><strong>Envoyez un mail sur :</strong></div>
                                        <div>info@glweb-creative.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h5>Suivez-nous également sur : </h5>
                                <div className='d-flex gap-2'>
                                    <a className='social-media' href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a className='social-media' href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
