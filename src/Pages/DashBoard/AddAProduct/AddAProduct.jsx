import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const AddAProduct = ({ selectedDate, setSelectedDate }) => {

    const { user } = useContext(AuthContext);
    console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const date = format(selectedDate, 'PP');

    // Get Categories data from server
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4500/categories`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddBook = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const bookPhoto = imageData.data.url;
                    const book = {
                        book_title: data.title,
                        category_id: data.bookCategory,
                        book_photo: bookPhoto,
                        published_date: date,
                        original_price: data.originalPrice,
                        resale_price: data.resalePrice,
                        product_condition: data.condition,
                        seller_name: user.displayName,
                        seller_email: user.email,
                        seller_image: user.photoURL,
                        years_of_use: data.yearsOfUse,
                        phone: data.phone,
                        location: data.location,
                        description: data.description,
                        status: false,
                        advertise: false,
                        wishlist: false,
                        verify_user: false,
                    }

                    //Save book information to the Database
                    fetch('http://localhost:4500/bookCategories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} Added Successfully`)
                            console.log(result);
                            //navigate('/dashboard/addaproduct')
                        })
                }
            });

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-[600px] mx-auto'>
            <h3 className="text-4xl text-accent font-bold text-center">Add Your Product</h3>
            <div className=' mt-1 flex justify-center'>
                <div className='w-24 h-[6px] bg-primary'></div>
            </div>

            <form onSubmit={handleSubmit(handleAddBook)} className="mt-8 bg-blue-200 rounded-2xl p-10 text-black">
                <div className="form-control w-full mx-auto ">
                    <label className="label">
                        <span className=" font-semibold">Name of Book</span>
                    </label>
                    <input {...register("title", {
                        required: "Book title is required"
                    })} type="text" className="input input-bordered w-full bg-white"
                        placeholder='Your book name'
                    />
                    {errors.title && <p className='text-red-600'>{errors.title.message}</p>}
                </div>
                {/* Book Title Form End */}

                <div className='flex justify-between space-x-3.5 '>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className=" font-semibold text-black">Book Category</span>
                        </label>
                        <select className="select select-bordered w-full marker text-[16px] capitalize" name="bookCategory" {...register("bookCategory", {
                            required: "Book Category is required"
                        })}>
                            {
                                categories?.bookCategories?.map(category => <option className='text-[16px] capitalize'
                                    key={category._id}
                                    value={category.category_id}
                                >{category?.category_id}</option>)
                            }
                        </select>
                        <div>
                            {errors.bookCategory && <p role="alert" className='text-red-700 text-xs'>{errors.bookCategory?.message}</p>}
                        </div>
                    </div>
                    {/* Book Category Form End */}

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="font-semibold text-black">Book Type</span>
                        </label>
                        <select className="select select-bordered w-full text-[16px] " name="condition" {...register("condition", {
                            required: "Product condition is Required"
                        })}>
                            <option className='text-[16px] capitalize'>Excellent</option>
                            <option className='text-[16px] capitalize'>Good</option>
                            <option className='text-[16px] capitalize'>Fair</option>
                        </select>
                        <div>
                            {errors.condition && <p role="alert" className='text-red-700 text-xs'>{errors.condition?.message}</p>}
                        </div>
                    </div>
                    {/* Product Condition End */}
                </div>

                <div className="relative mt-6">
                    <input {...register("image", { required: "Photo is required" })} type="file" name='image' id="floating_outlined-img" className="block px-2.5 pb-2.5 pt-4 w-full  text-gray-900  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer bg-white" placeholder=" " required />
                    <label htmlFor="floating_outlined-img" className="absolute text-lg text-black  duration-300 transform -translate-y-5 font-semibold scale-75 top-2 z-10 origin-[0] bg-secondary  px-2  peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 rounded">Choose Book Photo</label>
                    <div>
                        {errors.image && <p role="alert" className='text-red-700 text-xs'>{errors.image?.message}</p>}
                    </div>
                </div>
                {/* Book Image Form End */}

                <div className='flex justify-between space-x-3.5 mt-1 '>
                    <div className="form-control w-full mx-auto ">
                        <label className="label">
                            <span className=" font-semibold">Original Price</span>
                        </label>
                        <input {...register("originalPrice", {
                            required: "Original price is required"
                        })} type="number" className="input input-bordered w-full bg-white"
                            placeholder='Original price' name="originalPrice"
                        />
                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                    </div>
                    {/* Book Price Form End */}

                    <div className="form-control w-full mx-auto ">
                        <label className="label">
                            <span className=" font-semibold">Resale Price</span>
                        </label>
                        <input {...register("resalePrice", {
                            required: "Original price is required"
                        })} type="number" className="input input-bordered w-full bg-white"
                            placeholder='Resale price' name="resalePrice"
                        />
                        {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                    </div>
                    {/* Book Price Form End */}
                </div>
                {/* Price Form End */}

                <div className="form-control w-full mx-auto ">
                    <label className="label">
                        <span className=" font-semibold">Year's This Book Use</span>
                    </label>
                    <input {...register("yearsOfUse", {
                        required: "Use's year is required"
                    })} type="text" name="yearsOfUse" className="input input-bordered w-full bg-white"
                        placeholder="Used years"
                    />
                    {errors.yearsOfUse && <p className='text-red-600'>{errors.yearsOfUse.message}</p>}
                </div>
                {/*Used Years Form End */}

                <div className='flex justify-between space-x-3.5 mt-1 '>
                    <div className="form-control w-full mx-auto ">
                        <label className="label">
                            <span className=" font-semibold">Phone Number</span>
                        </label>
                        <input {...register("phone", {
                            required: "Your phone number is required"
                        })} type="text" className="input input-bordered w-full bg-white"
                            placeholder='Your phone number' name="phone"
                        />
                        {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                    </div>
                    {/* Book Price Form End */}

                    <div className="form-control w-full mx-auto ">
                        <label className="label">
                            <span className=" font-semibold">Your Location</span>
                        </label>
                        <input {...register("location", {
                            required: "Original price is required"
                        })} type="text" className="input input-bordered w-full bg-white"
                            placeholder='Add your location' name="location"
                        />
                        {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                    </div>
                    {/* Book Price Form End */}
                </div>
                {/* Price Form End */}

                <div className="form-control w-full mx-auto ">
                    <label className="label">
                        <span className=" font-semibold">Book Description</span>
                    </label>

                    <textarea {...register("description", {
                        required: "Description is required"
                    })} type="text" className="input input-bordered w-full bg-white p-4"
                        placeholder='Add your description' name="description" cols="30" rows="30"
                    />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>
                {/* Book Price Form End */}

                <button className='btn bg-primary border-0 duration-300 hover:bg-accent w-full mt-2 flex items-center text-xl text-white font-semibold' type="submit"  ><span className='ml-1'>Add Product</span></button>
                {/* Submit Button End */}
            </form>
        </div>
    );
};

export default AddAProduct;