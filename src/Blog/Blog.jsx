import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Layout from './Layout';
import Axios from '../Axios';
import Loading from './Loading';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

const Blog = () => {

    const location = useLocation()
    
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)
    const [postFound, setPostFound] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    const [searchParams, setSearchParams] = useSearchParams()
    const { categorySlug } = useParams()

    const [categoryName, setCategoryName] = useState('')
    const tagParam = searchParams.has('tag') ? `&tag=${searchParams.get('tag')}` : ''

    const getPosts = async (page = searchParams.has('page') ? searchParams.get('page') : 1) => {
        setPostFound(true)
        let response
        try {
            if (!categorySlug) {
                response = await Axios.get(`/api/get-posts?page=${page}${tagParam}`)
            } else {
                response = await Axios.get(`/api/get-category-posts/${categorySlug}?page=${page}${tagParam}`)
            }

            setCategoryName(response.data.data[0].category.name)
            setPosts(response.data.data)
            setCurrentPage(response.data.current_page)
            setLastPage(response.data.last_page !== undefined ? response.data.last_page : 1)
            
        } catch (error) {
            if (error.response && error.response.status === 404) {  
                setPostFound(false)
            } else {
                console.error('Une erreur est survenue : ', error)
            }
        } finally {
            setLoader(false)
        }
    }

    const handleChangePage = (page) => {
        window.scrollTo(0,0)
        setLoader(true)
        getPosts(page)
        searchParams.has('tag') ? setSearchParams({page: page, tag: searchParams.get('tag')}) : setSearchParams({page: page})
    }

    useEffect(() => {
        setLoader(true)
        getPosts()
    }, [location]);
    
    const showPginationNumbers = Array.from({ length: lastPage }, (_, index) => {
        let page = index+1
        return (
            <li  key={page} className="page-item" aria-current="page">
            <Link to='#' className={`page-link ${(!searchParams.has('page') && page == 1) || (searchParams.has('page') && page == currentPage) ? 'active':''}`} onClick={(e)=>{e.preventDefault();handleChangePage(page)}}>
                {page}
            </Link>
        </li>
        )
    })

    const showPosts = posts.map((post) => {
        return (
            <div key={post.id}>
                <Card title={post.title} link={post.slug} category={post.category.name} media={post.media} updatedAt={post.updatedAt} categoryHref={post.category.slug} updateDate={post.updated_at} />
            </div>
        )
    })

    /**
     * 
     * La page web
     * 
     * 
     */

    return (
        <Layout bannerTitle={categorySlug ? 'Catégory : '+categoryName : 'Consultez nos articles'}>
            {
                postFound ? (<div>
                    {loader && <Loading />}
                    <div className='posts mb-5'>
                        {!loader && showPosts}
                    </div>
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            {
                                lastPage != 1 && !loader && 
                                (<>
                                    <li className={`page-item ${(searchParams.get('page') == 1 || !searchParams.has('page')) && 'disabled'}`}>
                                        <Link to='#' className="page-link" onClick={(e)=>{e.preventDefault();handleChangePage(currentPage - 1)}}>
                                            &laquo; Previous
                                        </Link>
                                    </li>
                                    {showPginationNumbers}
                                    <li className={`page-item ${searchParams.get('page') == lastPage && 'disabled'}`}>
                                        <Link to='#' className="page-link" onClick={(e)=>{e.preventDefault();handleChangePage(currentPage + 1)}}>
                                            Next &raquo;
                                        </Link>
                                    </li>
                                </>)
                            }
                        </ul>
                    </nav>
                </div>) : <h4 className='mt-5 text-center'>Aucun article n'a été trouvé!</h4>
            }
        </Layout>
    );
}

export default Blog;
