import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BookCategory = ({ category }) => {

    const { category_id, category_name, category_image } = category;

    return (
        <Link to={`/category/${category_id}`}>
            <div className='bg-white shadow-2xl rounded-lg '>
                <div className='category-img'>
                    <img className='rounded-t-lg' src={category_image} alt="Book Category" />
                </div>
                <div className='md:p-5 p-3 flex justify-between items-center'>
                    <h2 className='lg:text-4xl md:text-2xl text-lg text-center font-bold font-specially text-black'>{category_name}</h2>
                    <div>
                        <BsFillArrowRightCircleFill className='lg:text-4xl md:text-2xl text-lg text-primary hover:text-accent'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCategory;