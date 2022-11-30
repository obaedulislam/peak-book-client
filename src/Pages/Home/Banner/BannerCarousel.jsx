import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";


const BannerCarousel = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className="carousel-img w-full flex justify-center">
                <img src={image} alt='' className="w-1/2 max-h-[600px] shadow-xl" />
            </div>

            <div className=" absolute flex justify-between transform -translate-y-1/2 md:left-16 sm:left-10 left-5 mf:right-16 sm:right-10 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn border-0 btn-sm btn-circle mr-5 text-white bg-accent"><BsArrowLeftShort className=" md:text-3xl text-lg"></BsArrowLeftShort></a>
                <a href={`#slide${next}`} className="btn border-0 btn-sm  btn-circle text-white bg-accent"><BsArrowRightShort className="md:text-3xl text-lg" ></BsArrowRightShort> </a>
            </div>
        </div>
        // Carousel Slider End
    );

};

export default BannerCarousel;