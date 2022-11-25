import React from 'react';
import { Link } from 'react-router-dom';

const SingleBookCategory = ({ category }) => {
    const { category_name, category_image } = category;

    return (
        <Link>
            <div className='bg-white shadow-2xl rounded-lg '>
                <div className='category-img'>
                    <img className='rounded-t-lg' src={category_image} alt="Book Category" />
                </div>
                <div className='p-5'>
                    <h2 className='text-4xl text-center font-bold font-specially text-black'>{category_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default SingleBookCategory;