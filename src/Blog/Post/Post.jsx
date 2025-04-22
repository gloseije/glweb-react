import React, { useEffect } from 'react';
import CategoryList from '../CategoryList';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import Axios from '../../Axios';
import '../../css/post.css'
import Loading from '../Loading';
import RelatedPost from './RelatedPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Post = () => {

    const { postSlug } = useParams()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [tags, setTags] = useState([])
    const [postFound, setPostFound] = useState(true)


    const getPost = async () => {
        try {
            const response = await Axios.get(`api/get-post/${postSlug}`)
            setPost(response.data)
            setTags(response.data.tags)
            setLoading(false)

        } catch (error) {
            if (error.response.status === 404) {
                setPostFound(false)
            } else {
                console.error(error)
            }
        }
    }

    const dateFormat = (date) => {
        const dateObjet = new Date(date)
        const dateOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }

        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }

        const formattedDate = dateObjet.toLocaleDateString('fr-FR', dateOptions)
        const formattedTime = dateObjet.toLocaleTimeString('fr-FR', timeOptions).replace(':', 'h')

        return `le ${formattedDate} à ${formattedTime}`
    }
    /*const tags = post.tags.map((tag) =>
        <Link key={tag.id} to='#' className='ms-2'>#{tag.name}</Link>
    )*/

    useEffect(() => {
        setPostFound(true)
        getPost()
    }, [useLocation()])

    if (postFound) {
        return (
            <>
                {loading && <Loading />}
                {!loading &&
                    (<>
                        <div className="position-relative" id='post-banner'>
                            <div className="w-100 h-100 bottom-0 position-absolute post-title-background">
                                <div className="container h-100 w-100 d-flex align-items-end">
                                    <div className="mb-5 pb-2 text-white">
                                        <h2 className='text-white'>{post.title}</h2>
                                        <div>
                                            <div>
                                                <small>Dernièrement modifié {dateFormat(post.updated_at)}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={`${process.env.REACT_APP_API_STORAGE_URL}${post.media}`} alt={post.title} className='w-100 h-100' />
                        </div>
                        <div className='container py-5'>
                            <div className="row">
                                <article className='col-lg-8 col-md-9 position-relative'>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                    <hr />
                                    <div className='d-flex flex-column flex-lg-row justify-content-between gap-4'>
                                        <div>
                                            <h5>Mots clés :</h5>
                                            <div className="d-flex gap-2">
                                                {tags.map((tag) =>
                                                    <Link key={tag.id} to='#' className='btn btn-sm btn-light'>#{tag.name}</Link>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Partagez cet article : </h5>
                                            <div className="w-100 mb-2 d-flex justify-content-lg-end gap-2">
                                                <Link to='#' className='social-media-link' id='facebookStyle'>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </Link>
                                                <Link to='#' className='social-media-link' id='instaStyle'>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </Link>
                                                <Link to='#' className='social-media-link' id='xStyle'>
                                                    <div className='bg-light d-flex justify-content-center align-items-center' style={{width: '15px', height: '15px'}}>
                                                        <FontAwesomeIcon icon={faSquareXTwitter} />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </article>
                                <CategoryList />
                            </div>
                        </div>
                        <RelatedPost id={post.id} category_id={post.category_id} />
                    </>)
                }
            </>
        );
    } else {
        return (
            <div className="d-flex flex-row justify-content-center my-5 py-5">
                <div className='my-5 text-center'>
                    <h2 style={{color: '#46a2ff'}}>404 Not found</h2>
                    <h3>
                        Cet article n'existe pas
                    </h3>
                    <p>Veuillez retourner à <a href="/">la page d'accueil</a></p>
                </div>
            </div>
        );
    }
}


export default Post;
