import React from 'react';
import slider1 from '../../../assets/slide1.jpg'
import slider2 from '../../../assets/slide2.jpg'
import slider3 from '../../../assets/slide3.jpg'
import { Link } from 'react-router-dom';
import BannerCarousel from './BannerCarousel';


const carouselData = [
    {
        image: slider1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slider3,
        prev: 2,
        id: 3,
        next: 1
    }
]

const Banner = () => {

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 py-20'>
            <div className='flex items-center'>
                <div>
                    <h1 className='font-specially md:text-5xl text-2xl text-[0A5078] md:leading-[50px] leading-[30px] font-bold uppercase text-[#5C7CFA]'>Peak Your Book Now</h1>
                    <h3 className='font-specially md:text-2xl text-xl text-[0A5078] md:leading-[50px] leading-[30px] font-bold '> Buy or Sell Your Second Hand Book! It's Easy! </h3>
                    <p className='text-[0A5078]  md:mt-3 mt-3 md:text-lg text-md '>Peak Book is a platform created for authors, writers or seller to present and sell & user to buy  their books online.</p>
                    <div className=" md:mt-5 mt-3">
                        <Link ><button className="md:py-[8px] py-[5px] rounded-lg   md:px-10 px-5  bg-[#5C7CFA]  border border-[#5C7CFA] duration-300 hover:border-[#5C7CFA] hover:bg-[#ff391100] text-[#000] mr-5 capitalize md:text-lg md:text-md text-sm font-semibold">Get Appointment</button></Link>
                    </div>
                    {/* CTA End */}
                </div>
            </div>
            {/* Hero Text End */}

            <div className='carousel w-full max-h-[600px] rounded-lg md:mt-0 mt-5'>
                {
                    carouselData.map(slide => <BannerCarousel
                        key={slide.id}
                        slide={slide}
                    ></BannerCarousel>)
                }
            </div>
            {/* Hero Carousel Img End */}

        </div>
    );
};

export default Banner;