import '../css/Home.css'
import Slider from './Slider'
import LastPost from './lastPost';
import Achievements from './Achievements';
import ServicesLayout from '../components/ServicesLayout';
import { serviceWithReadMoreButton } from '../Services/dataServices';

function Home() {
    return (
        <div id='home'>
            <Slider />
            <div id="behind-banner">
                <div id="behind-banner-caroussel">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 behind-banner-bloc">
                                <img src="/img/web-programming.png" alt="webdevelopment" />
                                <h6>Developpement web</h6>
                            </div>
                            <div className="col-4 behind-banner-bloc">
                                <img src="/img/web-design.png" alt="webdesign" />
                                <h6>Web-design</h6>
                            </div>
                            <div className="col-4 behind-banner-bloc">
                                <img src="/img/digital-marketing.png" alt="marketing digital" />
                                <h6>Marketing digital</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/men-working.png" alt="men-working" className="w-100 p-lg-2 p-md-5 pb-3 pb-md-0" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="p-0 p-md-5 p-lg-0">
                                <h3>Des sites web qui captivent et convertissent! Faites la différence avec nous</h3>
                                <p>
                                    Nous créons des sites web attrayants qui convertissent vos visiteurs en clients.
                                    Notre approche centré sur l'utilisateur garantit des expériences en ligne engageantes et intuitives.
                                    Faites la différence avec un site web qui reflète votre marque et atteint vos objectifs commerciaux.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: '#fbfbfb',
            }}>
                <div className="container py-5">
                    <h2 className='text-center mb-4'>Nos services</h2>
                    <ServicesLayout services={serviceWithReadMoreButton} />
                </div>
            </div>
            <Achievements />
            <LastPost />

        </div>
    );
}

export default Home;
