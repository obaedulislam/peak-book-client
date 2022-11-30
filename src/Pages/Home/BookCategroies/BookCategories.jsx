import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookCategory from './BookCategory';

const BookCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://peakbook-server.vercel.app/categories`)
            .then(data => setCategories(data.data.bookCategories))
    }, [])

    if (categories?.length === 0) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-0 md:px-4 px-3'>
            <h1 className='text-primary md:text-5xl sm:text-4xl text-2xl font-specially font-bold  tracking-tight'>Book Categories</h1>
            <div className=' mt-2'>
                <div className='w-24 h-[6px] bg-accent'></div>
            </div>
            <div className='all-categories bg-accent grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1  rounded-xl lg:gap-10 md:gap-7 sm:gap-5 gap-3 mt-8 lg:p-10 md:p-6 p-4'>
                {
                    categories?.map(category => <BookCategory
                        key={category._id}
                        category={category}
                    ></BookCategory>)
                }
            </div>
        </div>
    );
};

export default BookCategories;