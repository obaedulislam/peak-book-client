import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import author from '../../../assets/author.png'
import background from '../../../assets/background.jpg'

const BestAuthor = () => {
    return (
        <div className="rounded-xl bg-primary lg:mt-36 mt-32 lg:mx-0 md:mx-4 mx-3">
            <div className='author-section'>
                <div className='grid md:grid-cols-2 grid-cols1  mx-auto md:px-20  px-5'>
                    <div className='flex md:justify-start justify-center'>
                        <img src={author} className="w-[80%] rounded-lg  lg:-mt-40 -mt-0" alt="Treatment " />
                    </div>
                    <div className='flex items-center lg:py-12 md:py-0 py-8  '>
                        <div className='text-start '>
                            <h5 className='text-white text-2xl font-specially font-semibold md:mt-0 mt-5 '>Stephen Richards Covey</h5>
                            <h1 className='text-gray-900 md:text-5xl sm:text-4xl text-2xl font-specially font-bold  tracking-tight'>Best Author 2022</h1>
                            <p className=" lg:py-4 py-2 lg:text-lg md:text-md text-sm text-gray-100">Stephen Richards Covey was an American educator, author, businessman, and keynote speaker. His most popular book is The 7 Habits of Highly Effective People. The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book</p>
                            <div className="  mt-3">
                                <Link ><button className="md:py-[8px] pt-[3px] rounded-lg   md:px-5 px-5  bg-white   duration-300 hover:border-[#fff] hover:bg-accent text-accent hover:text-white mr-5  md:text-lg md:text-md text-sm font-semibold flex items-center uppercase"><BsCartPlusFill className='md:text-3xl text-lg mr-2'></BsCartPlusFill> Buy His Book</button></Link>
                            </div>
                            {/* CTA End */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestAuthor;