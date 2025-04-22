import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Axios from '../Axios';

const CategoryList = () => {

    const[ categories, setCategories ] = useState([])
    const[ tags, setTags ] = useState([])

    const navigate = useNavigate()

    const categoryUrl = '/api/get-categories', tagUrl = '/api/get-tags'
    const [ searchParams, setSearchParams ] = useSearchParams()

    const getCategories = async() => {

        try {
            const response = await Axios.get(categoryUrl)
            setCategories(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getTags = async() => {

        try {
            const response = await Axios.get(tagUrl)
            setTags(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleTagClick = (slug) => {
        window.scrollTo(0,0)
        setSearchParams({ tag: slug })
    }
    const handleCategoryClick = (slug) => {
        window.scrollTo(0,0)
        navigate(`/blog/${slug}${searchParams.has('tag') ? '?tag='+searchParams.get('tag') : ''}`)
    }

    useEffect(() => {
        getCategories()
        getTags()
    }, [categoryUrl, tagUrl])

    return (
        <aside className="col-lg-4 col-md-3 ps-md-3 ps-lg-5 mt-lg-0 mt-3">
            <div className='px-3'>
                <h5 className='text-dark'>Catégories</h5>
                <ul className='pb-4 rounded mt-3'>
                    {
                        categories.map((category) => 
                            <li key={category.id} className='py-1 ms-0'>
                                <Link to='#' onClick={(e)=>{e.preventDefault(); handleCategoryClick(category.slug)}} className='link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark'>{category.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className='px-3 d-none d-lg-block'>
                <h5 className='text-dark'>Mots clés</h5>
                <div style={{
                    lineHeight : '40px'
                }}>
                    <Link to='#' onClick={(e)=>{e.preventDefault();}} className={`btn btn-sm ${!searchParams.has('tag') ? 'btn-primary' : 'btn-light'} me-2`}>All</Link>
                    {
                        tags.map((tag) => 
                            <Link to='#' onClick={(e)=>{e.preventDefault(); handleTagClick(tag.slug)}} key={tag.id} className={`btn btn-sm ${searchParams.get('tag') == tag.slug ? 'btn-primary' : 'btn-light'} me-2`}>{tag.name}</Link>
                        )
                    }
                </div>
            </div>
        </aside>
    );
}

export default CategoryList;
