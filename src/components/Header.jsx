import { useEffect, useState } from "react";
import Logo from "./Logo";
import '../css/header.css'
import { Link, NavLink } from "react-router-dom";

function Header() {

    const [strongOpacity, setStrongOpacity] = useState("")

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50)
                setStrongOpacity('navbar-1 shadow-sm')
            else
                setStrongOpacity("")
        })
    }, [])

    return (
        <header>
            <nav className={`${strongOpacity} navbar fixed-top navbar-expand-lg navbar-light`} data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand p-0" to="/">
                        <Logo />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Accueil</NavLink>
                            </li>
                            <li className="nav-item position-relative">
                                <Link to={'#'} type="button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nos prestations</Link>
                                <ul className={`dropdown-menu border-0 ${strongOpacity}`}>
                                    <li><Link className="dropdown-item" to="/services">Nos services</Link></li>
                                    <li><Link className="dropdown-item" to="#">Nos réalisations</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">A propos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                        {/*<form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>*/}
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;