import React from 'react';
import { BsCartPlusFill, BsFillHeartFill } from 'react-icons/bs';
import { MdLocationOn, MdVerifiedUser } from 'react-icons/md';
import { AiFillStar } from "react-icons/ai";

const Book = ({ book, setBuyBook }) => {

    const { book_title, book_photo, published_date, resale_price, original_price, years_of_use, seller_name, verify_user, location, product_condition } = book;



    return (
        <div className='bg-gray-100   shadow-xl rounded-xl'>
            <div className='p-3  '>
                <img className='shadow-xl w-full h-[350px] border-r-[12px] border-gray-400 ' src={book_photo} alt={book_title} />

            </div>

            <div className='relative pb-5 pt-2 px-5 h-[320px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-2.5'>
                        <div className='flex '>
                            <AiFillStar className='text-yellow-500 text-lg'></AiFillStar>
                            <AiFillStar className='text-yellow-500 text-lg'></AiFillStar>
                            <AiFillStar className='text-yellow-500 text-lg'></AiFillStar>
                            <AiFillStar className='text-yellow-500 text-lg'></AiFillStar>
                            <AiFillStar className='text-yellow-500 text-lg'></AiFillStar>
                        </div>
                        <div><p className='py-.5 px-2 bg-accent rounded-lg text-sm text-white'>{product_condition}</p></div>
                    </div>
                    <div className=''>
                        <button className='p-[6px] text-white hover:text-secondary rounded-lg text-2xl shadow-xl bg-primary'><BsFillHeartFill className="mt-[2px]"></BsFillHeartFill></button>
                    </div>
                </div>
                <div className='mb-2 flex justify-between mt-2'>
                    <h3 className='text-2xl font-specially font-bold text-primary'>${resale_price}</h3>
                    <h3 className='text-2xl font-specially  font-semibold'> <strike className="original-price pl-2">${original_price}</strike></h3>
                </div>
                <h2 className='font-bold text-xl text-black'>{book_title}</h2>
                <div className='mt-3 '>
                    <p className='font-semibold flex items-center'>
                        <span>Seller: </span><span className='text-black ml-2'> {seller_name}</span>
                        <span>
                            {
                                (verify_user) ?
                                    <MdVerifiedUser className='text-primary text-lg'></MdVerifiedUser>
                                    : ''
                            }
                        </span>
                    </p>
                </div>
                <div>
                    <p className='mt-1  font-semibold '>Published: <span className='text-primary font-bold'>{published_date}</span> </p>
                </div>
                <div>
                    <p className='mt-1  font-semibold '>Used: <span className='text-primary font-bold'>{years_of_use}</span> </p>
                </div>
                <div>
                    <p className='mt-1   font-semibold flex items-center'><MdLocationOn className='text-lg text-primary'></MdLocationOn><span className='text-primary font-bold'>{location}</span> </p>
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