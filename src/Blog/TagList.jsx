import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Axios from '../Axios';

const TagList = () => {

    const [tags, setTags] = useState([])


    const tagUrl = '/api/get-tags'
    const [searchParams, setSearchParams] = useSearchParams()

    const getTags = async () => {

        try {
            const response = await Axios.get(tagUrl)
            setTags(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getAllTagPosts = () => {
        if (searchParams.has('tag')) {
            window.scrollTo(0,0)
            searchParams.delete('tag')
        }
    }

    const handleTagClick = (slug) => {
        window.scrollTo(0,0)
        setSearchParams({ tag: slug })
    }

    useEffect(() => {
        getTags()
    }, [tagUrl])

    return (
        <div className='d-flex d-lg-none gap-3 overflow-auto w-100 mb-3 tag-scroll'>
            <Link to='#' onClick={(e) => { e.preventDefault(); getAllTagPosts() }} className={`btn btn-sm ${!searchParams.has('tag') ? 'btn-primary' : 'btn-outline-secondary'}`}>All</Link>
            {
                tags.map((tag) =>
                    <Link to='#' onClick={(e) => { e.preventDefault(); handleTagClick(tag.slug) }} key={tag.id} className={`btn btn-sm ${searchParams.get('tag') == tag.slug ? 'btn-primary' : 'btn-outline-secondary'}`}>{tag.name}</Link>
                )
            }
        </div>
    );
}

export default TagList;
