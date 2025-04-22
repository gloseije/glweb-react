import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Axios from '../Axios';


const [searchParams, setSearchParams] = useSearchParams()

export async function getPosts(page = searchParams.has('page') ? searchParams.get('page') : 1) {
    const response = await Axios.get(`/api/get-posts?page=${page}`)

    return {
        currentPage: response.data.current_page,
        lastPage: response.data.last_page !== undefined ? response.data.last_page : page,
        posts: response.data.data,
    }
}
