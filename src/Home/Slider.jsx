import  '../css/slider.css';

function Slider() {

    return (                
        <div id="banner">
            {/* Caroussel */}
            <div id="carousel-banner" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {/* Boutons indicateurs caroussel */}
                    <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">{/* Première image */}
                    <div className="carousel-item active">
                        {/* class="d-block w-100" */}
                        <div className="d-block w-100" id="banner-1">
                            <div className="text-banner-position">
                                <div className="container-fluid text-banner">
                                    <div className="row">
                                        <div className="offset-1 col-9 offset-sm-2 col-sm-8 col-lg-6 text">
                                            <h2>Boostez votre présence en ligne avec des sites web innovants et performants</h2>
                                            <p>Service de création des sites web</p>
                                            <span><a href="#" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-right" /> En savoir plus</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fond-banner"></div>
                        </div>
                    </div>
                    <div className="carousel-item" >{/* Deuxième image */}
                        <div className="d-block w-100" id="banner-2">
                            <div className="text-banner-position">
                                <div className="container-fluid text-banner">
                                    <div className="row">
                                        <div className="offset-1 col-9 offset-sm-2 col-sm-8 col-lg-6 text">
                                            <h2>Transformez vos idées en réalité digitale</h2>
                                            <p>Service de création des sites web</p>
                                            <span><a href="#" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-right" /> En savoir plus</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fond-banner"></div>
                        </div>
                    </div>
                    <div className="carousel-item">{/* Troisième image */}
                        <div className="d-block w-100" id="banner-3">
                            <div className="text-banner-position">
                                <div className="container-fluid text-banner">
                                    <div className="row">
                                        <div className="offset-1 col-9 offset-sm-2 col-sm-8 col-lg-6 text">
                                            <h2>Laissez-nous propulser votre entreprise dans l'ère numérique</h2>
                                            <p>Service de création des sites web</p>
                                            <span><a href="#" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-right" /> En savoir plus</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fond-banner">{/* Le fond de la bannière */}</div>
                        </div>
                    </div>
                </div>
                {/* Boutons pour actionner le caroussel */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-banner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-banner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;

