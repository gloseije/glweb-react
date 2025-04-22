import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Outlet, useLocation, useNavigationType } from "react-router-dom"
import Home from "./Home/Home"
import Layout from './Layout'
import Blog from './Blog/Blog'
import Loader from './components/loader'
import Contact from './Contact/Contact'
import Post from './Blog/Post/Post'
import Services from './Services/Services'

function App() {
    
    const [ loading, setLoading ] = useState(true)
    const location = useLocation()
    const navigationType = useNavigationType()
    const [ currentPathname, setCurrentPathname ] = useState(location.pathname)
    
    const handleLoad = () => {
        setLoading(false)
    }


    /**
     * Affichage de l'animation du chargement au moment où
     * la page est totalement raffraichie
     */

    useEffect(() => {
        setLoading(true)
        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        };
    }, []);

    /**
     * Affichage de l'animation du chargement au moment où
     * la page est partiellement rafraichie
     * Lorsqu'il y a la balise Link
     * à la place de la balise html a
     */

    useEffect(() => {
        setLoading(true)
        if (navigationType === 'POP') {
            setLoading(false)
        } else {

            if (currentPathname !== location.pathname) {
                setCurrentPathname(location.pathname)
                const timer = setTimeout(handleLoad,500)
                
                return () => {
                    clearTimeout(timer)
                }
            }
            else {
                handleLoad(false)
            }
        }
        
    }, [location, navigationType]);

    return (
        <>
            {loading && <Loader />}
            <Routes>
                <Route path='/' element={<Layout><Outlet /></Layout>} >
                    <Route path='' element={<Home />} />
                    <Route path='blog/'>
                        <Route path=''  element={<Blog />} />
                        <Route path=':categorySlug' element={<Blog />} />
                    </Route>
                    <Route path='contact' element={<Contact />} />
                    <Route path=':postSlug' element={<Post />} />
                    <Route path='/services' element={<Services />} />
                </Route>
            </Routes>
        </>
    )
    
}

export default App
