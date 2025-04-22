import "../css/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-div">
                        <h5>Mentions légales</h5>
                        <p><a href="#">FAQ</a></p>
                        <p><a href="#">Politique de confidentialité</a></p>
                        <p><a href="#">Politique relative aux cookies</a></p>
                    </div>
                    <div className="col-md-4 footer-div">
                        <h5>Notre équipe</h5>
                        <p><a href="#">Qui sommes-nous?</a></p>
                        <p><a href="#">Nos services</a></p>
                        <p><a href="#">Notre blog</a></p>
                        <p><a href="#">Nous contacter</a></p>
                    </div>
                    <div className="col-md-4 footer-div">
                        <h5>Vous pouvez nous joindre sur : </h5>
                        <p><a href="mailto:glweb75@gmail.com"><img src="/img/mail.png" alt="mail" /> glweb75@gmail.com</a></p>
                        <p><a href="https://wa.me/243892602165"><img src="/img/whatsapp.png" alt="whatsapp" /> +243 892 602 165</a></p>
                        <h5>Nous suivre egalement sur : </h5>
                        <p><a href="#"><img className="scale-1" src="/img/Facebook.png" alt="" /></a> <a href="#"><img className="scale-1" src="/img/Instagram.png" alt="" /></a></p>
                    </div>
                    <div id="copyright" className="col-md-12">
                        <p align="center">Copyright © 2024 glweb. Tout droit reservé.</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
