// import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className='my-container relative'>
            <img className='object-cover w-full' src={banner} alt="" />
            <div className='absolute top-[10%] md:top-[40%] left-1/2 right-10 space-y-4'>
                <h1 className='text-2xl md:text-4xl font-bold text-indigo-200'>Putul</h1>
                <p className='text-xs md:text-base text-white'>Putul is an online toy shop that offers a wide variety of toys for children. <span className='hidden md:block'> We prioritize quality, safety, and affordability. Our user-friendly website provides a seamless shopping experience with detailed product descriptions and vibrant images. We believe in the power of play and select toys that foster creativity, imagination, and learning.</span> </p>
                <button className='border border-white px-2 py-1 md:px-5 md:py-2 text-white font-semibold'>Learn More</button>
            </div>
           
        </div>
    );
};

export default Banner;