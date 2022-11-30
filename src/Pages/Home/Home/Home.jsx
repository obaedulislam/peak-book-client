import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';

import Banner from '../Banner/Banner';
import BestAuthor from '../BestAuthor/BestAuthor';
import BookCategories from '../BookCategroies/BookCategories';


const Home = () => {
    return (
        <div>
            <ScrollRestoration />
            <div className='lg:px-20 md:px-8 px-5 lg:py-16  md:py-8 py-5 lg:mx-0 md:mx-4 mx-3 bg-gray-100 my-10 rounded-xl'>
                <Banner></Banner>
            </div>
            <div className='lg:pt-10 md:pt-8 pt-5 lg:pb-20 md:pb-8 pb-5'>
                <BookCategories></BookCategories>
            </div>
            <div className='lg:pt-10 md:pt-8 pt-5 lg:pb-20 md:pb-8 pb-5'>
                <AdvertiseProducts></AdvertiseProducts>
            </div>

            <div className='lg:pt-10 md:pt-8 pt-5 lg:pb-20 md:pb-8 pb-5'>
                <BestAuthor></BestAuthor>
            </div>
        </div>
    );
};

export default Home;