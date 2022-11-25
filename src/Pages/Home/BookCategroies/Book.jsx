import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { MdLocationOn, MdVerifiedUser } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Book = ({ book, setBuyBook }) => {

    const { title, book_photo, publishedDate, resale_price, original_price, used_years, seller_name, isVerified, location } = book;



    return (
        <div className='bg-gray-100 shadow-xl rounded-xl'>
            <div>
                <img className='rounded-t-xl w-full ' src={book_photo} alt={title} />
            </div>
            <div className='relative py-5 px-5 h-[320px]'>
                <div className='mb-2 flex justify-between '>
                    <h3 className='text-2xl font-specially font-bold text-primary'>${resale_price}</h3>
                    <h3 className='text-2xl font-specially  font-semibold'> <strike className="original-price pl-2">${original_price}</strike></h3>
                </div>
                <h2 className='font-bold text-xl text-black'>{title}</h2>
                <div className='mt-3 '>
                    <p className='font-semibold flex text-lg items-center'>
                        <span>Seller: </span><span className='text-black ml-2'> {seller_name}</span>
                        <span>
                            {
                                (isVerified) ?
                                    <MdVerifiedUser className='text-primary text-xl'></MdVerifiedUser>
                                    : ''
                            }
                        </span>
                    </p>
                </div>
                <div>
                    <p className='mt-1 text-lg  font-semibold '>Published: <span className='text-primary font-bold'>{publishedDate}</span> </p>
                </div>
                <div>
                    <p className='mt-1 text-lg  font-semibold '>Used: <span className='text-primary font-bold'>{used_years}</span> </p>
                </div>
                <div>
                    <p className='mt-1 text-lg  font-semibold flex items-center'><MdLocationOn className='text-xl text-primary'></MdLocationOn><span className='text-primary font-bold'>{location}</span> </p>
                </div>
                <div className="absolute w-full bottom-0 left-0 md:mt-5 mt-3">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setBuyBook(book)}
                        className="w-full  md:py-[12px] py-[5px] rounded-lg    bg-accent  duration-300 hover:border-[#5C7CFA] hover:bg-primary text-white   md:text-lg md:text-md text-sm font-semibold flex justify-center items-center uppercase"><BsCartPlusFill className='text-3xl mr-2'></BsCartPlusFill> Buy Now</label>
                </div>
            </div>


        </div>
    );
};

export default Book;