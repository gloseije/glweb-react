import React, { useEffect, useState } from 'react';
import '../../css/lastPost.css';
import Card from '../../components/Card';
import Axios from '../../Axios';

const RelatedPost = ({ id, category_id }) => {

    const [posts, setPosts] = useState([])

    const getLastPosts = async () => {
        try {
            const response = await Axios.get(`/api/get-related-posts/${category_id}/${id}`)
            setPosts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getLastPosts()
    }, [])

    return (
        <div className='posts-background py-5'>
            <div className="container w-md-100 w-80">
                <h2 className='text-center mb-4'>Articles connexes</h2>
                <div className="row">
                {
                    posts.map((post) => {
                        return (
                            <div className="mb-3 pe-sm-3 px-2 col-lg-4 col-md-6 col-12" key={post.id}>
                                <Card title={post.title} link={post.slug} category={post.category.name} media={post.media} updateDate={post.updated_at} categoryHref={post.category.slug} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default RelatedPost;
