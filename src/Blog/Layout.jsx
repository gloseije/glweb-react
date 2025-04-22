import React from 'react';
import CategoryList from './CategoryList';
import { Link } from 'react-router-dom';
import '../css/Blog.css'
import TagList from './TagList';
import Breadcrumb from '../components/Breadcrumb';

const Layout = ({ bannerTitle, children }) => {

    return (
        <div id='blog'>
            {
            // Bannière de la page web 
            }
            <div id='banner'>
                <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                    <div className="mt-3">
                        <h2 className='text-light'>{ bannerTitle }</h2>
                        <Breadcrumb />

                    </div>
                </div>
            </div>
            {
            // 
            }

            <section className="container py-5">
                <div className="row">
                    <article className='col-lg-8 col-md-9 position-relative'>
                        <TagList />
                        { children }
                    </article>
                    <CategoryList />
                </div>


            </section>
        </div>
    );
}

export default Layout;
