import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../css/lastPost.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Axios from '../Axios';
import Loading from '../Blog/Loading';

const LastPost = () => {

    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                    dots: true,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                    dots: true,
                    infinite: true,
                    arrows: true,
                }
            }
        ]
    };

    const getLastPosts = async () => {
        try {
            const response = await Axios.get('/api/get-last-posts')
            setPosts(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        setLoader(true)
        getLastPosts()
    }, [])

    const postPublished = posts.map((post) => {
        return (
            <div className="mb-3 pe-sm-3 px-2" key={post.id}>
                <Card title={post.title} link={post.slug} category={post.category.name} media={post.media} updateDate={post.updated_at} categoryHref={post.category.slug} />
            </div>
        )
    })

    return (
        <div className='posts-background py-5'>
            <div className="container w-md-100 w-80">
                <h2 className='text-center mb-4'>Dernières nouvelles</h2>
                {loader && <Loading />}
                {
                    !loader && (
                    <div className="slider-container">
                        <Slider {...settings}>
                            {postPublished}
                        </Slider>
                    </div>)
                }
                <h5 className='text-sm-end text-center mt-sm-4 mt-5 link-to-articles'>
                    <Link to="/blog" className=''>
                        Accéder à d'autres articles
                    </Link>
                </h5>
            </div>
        </div>
    );
}

export default LastPost;
