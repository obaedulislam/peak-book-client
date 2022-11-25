import React from 'react';
import Banner from '../Banner/Banner';
import BookCategories from '../BookCategroies/BookCategories';


const Home = () => {
    return (
        <div>
            <div className='px-20 bg-gray-100 my-10 rounded-xl'>
                <Banner></Banner>
            </div>
            <div className='pt-10 pb-20'>
                <BookCategories></BookCategories>
            </div>
        </div>
    );
};

export default Home;