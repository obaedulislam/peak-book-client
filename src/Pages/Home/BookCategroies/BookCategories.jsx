import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBookCategory from './SingleBookCategory';

const BookCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4500/categories`)
            .then(data => setCategories(data.data.bookCategories))
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:4500/categories`)
    //         .then(res => res.json())
    //         .then(data => setBookCategories(data.bookCategories))
    // }, []);

    return (
        <div>
            <h1 className='text-primary md:text-5xl sm:text-4xl text-2xl font-specially font-bold  tracking-tight'>Book Categories</h1>
            <div className=' mt-2'>
                <div className='w-24 h-1 bg-accent'></div>
            </div>
            <div className='all-categories bg-accent grid grid-cols-3 rounded-xl gap-10 mt-8 p-10'>
                {
                    categories?.map(category => <SingleBookCategory
                        key={category._id}
                        category={category}
                    ></SingleBookCategory>)
                }
            </div>
        </div>
    );
};

export default BookCategories;