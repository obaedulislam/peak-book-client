import React, { useState } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import Book from './Book';
import BuyingBookModal from './BuyingBookModal';


const SingleBookCategory = () => {
    const [buyBook, setBuyBook] = useState(null);
    const [loading, setLoading] = useState(false);

    const booksData = useLoaderData();
    const books = booksData.bookCategory;

    return (
        <div className='py-20'>
            <ScrollRestoration />
            <div className='pb-10'>
                <h1 className='text-primary md:text-5xl sm:text-4xl text-2xl text-center font-specially font-bold  tracking-tight'>Explore Now!</h1>
                <div className='flex justify-center mt-2'>
                    <div className='w-24 h-[6px] bg-accent'></div>
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:gap-6 gap-4 lg:px-0 px-3'>
                {
                    books?.map(book => <Book
                        key={book._id}
                        book={book}
                        setBuyBook={setBuyBook}
                    ></Book>)
                }
            </div>
            <div>
                {
                    buyBook &&
                    <BuyingBookModal
                        buyBook={buyBook}
                        setBuyBook={setBuyBook}
                    ></BuyingBookModal>
                }
            </div>
        </div>
    );
};

export default SingleBookCategory;