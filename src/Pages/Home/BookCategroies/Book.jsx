import React, { useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { MdLocationOn, MdReport, MdVerifiedUser } from 'react-icons/md';
import { AiFillStar } from "react-icons/ai";
import Swal from 'sweetalert2';

const Book = ({ book, setBuyBook }) => {

    const [loading, setLoading] = useState(false);

    const { book_title, book_photo, published_date, resale_price, original_price, years_of_use, seller_name, verify_user, location, product_condition, reported } = book;


    // Report a product to admin
    const handleReportedProducts = id => {

        Swal.fire({
            title: 'Are you sure you want to Report this Book?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, want to Report it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:4500/reported-product/${id}`, {
                    method: "PUT",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            setLoading(true);
                            Swal.fire(
                                'Reported!',
                                'This Book has been Reported.',
                                'success'
                            )
                        }
                    })
            }
        })

    }


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
                        <div><p className='py-.5 px-2 bg-accent rounded-lg text-xs text-white'>{product_condition}</p></div>
                    </div>
                    <div className=''>
                        {
                            reported ? <button className='py-.75 px-2 text-white  rounded-lg   text-sm shadow-xl bg-accent flex items-center '><MdReport className="text-sm mr-[2px]"></MdReport> Reported</button>
                                :
                                <button onClick={() => handleReportedProducts(book._id)} className='py-.75 px-2 text-white  rounded-lg   text-sm shadow-xl bg-primary hover:bg-accent flex items-center'><MdReport className="text-sm mr-[2px]"></MdReport> Report</button>
                        }
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