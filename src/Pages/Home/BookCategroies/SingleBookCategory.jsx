import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import BookingModal from './BookingModal';

const SingleBookCategory = () => {
    const [buyBook, setBuyBook] = useState(null)

    const booksData = useLoaderData();
    const books = booksData.bookCategory;

    return (
        <div className='py-20'>
            <div className='pb-10'>
                <h1 className='text-primary md:text-5xl sm:text-4xl text-2xl text-center font-specially font-bold  tracking-tight'>Explore Now!</h1>
                <div className='flex justify-center mt-2'>
                    <div className='w-24 h-[6px] bg-accent'></div>
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-10'>
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
                    <BookingModal
                        buyBook={buyBook}
                        setBuyBook={setBuyBook}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default SingleBookCategory;