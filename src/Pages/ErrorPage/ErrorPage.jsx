import React from 'react';
import errorimage from '../../assets/errorimage.png'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ErrorPage = () => {
    console.log(Error);
    return (
        <div>
            <div className="error-container mx-auto max-w-[800px] py-20 flex justify-center items-center sm:px-5 px-3">
                <div>
                    <div className="error-img sm:w-[450px] mx-auto">
                        <img className='rounded-lg w-full' src={errorimage} alt='ErrorImage' />
                    </div>
                    {/* Error Image End */}

                    <div className="error-title mt-3">
                        <h2 className='lg:text-6xl md:text-2xl text-lg text-center text-primary  font-bold font-specially'>Oops! This page not found.</h2>
                    </div>
                    {/* Error Title End */}

                    <div className="error-desc text-center sm:mt-4 mt-2">
                        <p className='sm:text-xl text-md font-semibold '>We can't found this page. This website don't contain any page like it. So please go to the homepage to navigate our website.</p>
                        <p className='md:text-3xl sm:text-xl text-lg text-primary font-bold font-specially mt-4'>Thank You!</p>
                    </div>
                    {/* Error Description End */}

                    <div className="back-home text-center mt-4 flex justify-center">
                        <Link to='/'>
                            <button className="py-3 px-7 text-white  font-bold duration-300 bg-accent hover:bg-primary  rounded flex items-center">
                                <span className=' text-[17px] sm:text-xl'>Back to Home</span>
                                <FaHome className='text-2xl ml-2'></FaHome>
                            </button>
                        </Link>
                    </div>
                    {/* Back To home button End */}
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;